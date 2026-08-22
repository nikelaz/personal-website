import code from "@/helpers/code";

export default {
  slug: "how-i-made-a-local-app-support-concurrent-file-editing-with-crdts",
  title: "How I Made a Local App Support Concurrent File Editing with CRDTs",
  summary: "This article walks through the problem of concurrent file editing in a local, single-instance desktop application and explains how the author solved it with Conflict-free Replicated Data Types (CRDTs), using a Hybrid Logical Clock with a device id as a tie-breaker to guarantee deterministic convergence.",
  date: "2026-08-22",
  author: "Nikola Lazarov",
  tags: ["Distributed Systems"],
  ogImage: "local-app-crdt-og-image.png",
  html: `
    <h2>The Problem</h2>
    <p>When you work on local software that works with files, you eventually face a problem with file convergence.</p>
    <p>Imagine two people using your budgeting app and they open the same file - through a cloud service or another file sync mechanism. They both make changes simultaneously.</p>
    <p>If your program works only on local files and only one instance of the software can be opened on a computer, you don't have that problem. You can read the file contents, load them in memory and do changes to them. When the program saves it can overwrite the entire file contents.</p>
    <p>With multiple users editing the same file this model obviously doesn't work. If all users overwrite, a lot of changes will be lost when users work simultaneously.</p>
    <h2>The Naive Solution</h2>
    <p>The naive solution that comes to mind is to load the file before doing a save and attempt to do a 3-way merge comparing the first file you loaded, the file on disk and the changes you have in memory.</p>
    <p>This sounds reasonable, but as soon as your data has hierarchy and relationships, the edge cases start piling up very quickly. Deletes, concurrent edits, newly created objects, nested objects, conflicting changes, and ordering all become problems you have to define rules for.</p>
    <p>I did try to do this with my budgeting app and quickly realized this was the wrong approach.</p>
    <h2>Conflict-free Replicated Data Types (CRDTs)</h2>
    <p>If you research how this problem is solved you will find the term Conflict-free Replicated Data Type (CRDT). This is a relatively broad term for a family of data types that can be used to solve this problem. The idea is to structure the data in a way that:</p>
    <ul>
      <li>Any replica can be modified without coordinating or communicating with any other replica <a href="#reference-1"><sup>[1]</sup></a></li>
      <li>When any two replicas have received the same updates, they reach the same state, deterministically, by adopting mathematically sound rules to guarantee state convergence <a href="#reference-1"><sup>[1]</sup></a></li>
    </ul>
    <p>The idea is to have a data type that can diverge on the edges - the client PCs of your local software - and create a data structure which allows merging any two files at any point in time and coming up with the same merged file.</p>
    <p>CRDTs are not very specific and there's no CRDT standard data type you can just implement and be done with it. They are more of a broad category of approaches and data models you can apply to solve a wide variety of problems.</p>
    <p>My application is about personal finance and budgets. I have a budget, categories and transactions. But before I show you how I structure this data to merge changes we have to talk about an important prerequisite - tracking time.</p>
    <p>My CRDT implementation will be Last-Writer-Wins (LWW). As the word "Last" implies I need a timeline to determine what change is "last" and that's not as easy as it sounds. You can generate a timestamp but there's no guarantee that timestamp will be correct across two devices. Also, what will happen if a device generates multiple changes in the same millisecond - how would the merge algorithm determine which change was last?</p>
    <p>There are multiple approaches to solve this and multiple types of "clocks" to tackle this problem. My approach is to use a Hybrid Logical Clock (HLC) with a device id as a tie-breaker. I'll explain what that means right now.</p>
    <h2>Hybrid Logical Clock with Device ID as a Tie-Breaker</h2>
    <p>An HLC is a hybrid clock that contains physical time and a logical counter.</p>
${await code(`
pub struct HlcTimestamp {
    pub physical_ms: i64,
    pub logical: i32,
}
`, "rust")}
    <p>This helps in the case where:</p>
    <p>
      Device A has a correct clock, say 8:00.<br />
      Device B has a clock that is 10 minutes ahead - 8:10.
    </p>
    <p>If device B makes a change and device A attempts to sync with it, device A will detect that B's clock is different. The change A wants to make is later because A just received B's changes. Whatever B did was before the future changes device A wants to do now. Even though A's physical time is behind B, it can reuse the future time from B's last transaction and add +1 to the logical counter. This way the order is kept, and B or anyone else can merge A's changes correctly.</p>
    <p>There is still a case where we will get the same physical and logical time. We need to deterministically merge one way or the other - it doesn't matter which way as we don't have that information, but it needs to be deterministic to comply with the CRDTs convergence requirement.</p>
    <p>For that, I use the device id as a deterministic tie-breaker and compare it (UUID of the device) for a deterministic result.</p>
${await code(`
pub struct HlcTimestamp {
    pub physical_ms: i64,
    pub logical: i32,
    pub device_id: Uuid,
}
`, "rust")}
    <p>This doesn't tell us which change was actually later. We don't know that. It simply gives every replica the same deterministic answer.</p>
    <h2>The Data</h2>
    <p>Now let's talk about the data. As I mentioned earlier, my data model is a budget file that contains categories and transactions. As the file is the budget, the CRDT needs to deal with categories and transactions.</p>
${await code(`
// LWW map - per entity, per field, keep only the latest write
struct CRDTChanges {
    categories:   HashMap<Uuid, HashMap<CategoryField,   CategoryChange>>,
    transactions: HashMap<Uuid, HashMap<TransactionField, TransactionChange>>,
    // + more fields
}

// winning write per field, decided by HLC timestamp (total order)
struct CategoryChange {
    timestamp: HlcTimestamp,   // (physical_ms, logical, device_id)
    operation: CRDTOperation,  // Create | Update
    payload:   CategoryChangePayload,
}
`, "rust")}
    <p>I store the updates in HashMaps - where we have only the latest update per field. The hash map's key is the field id. This way the file doesn't grow endlessly, just one update per field.</p>
    <p>This handles create and update operations. We have the timestamp, operation and payload. Let's see an example of how I merge changes.</p>
    <h2>How I Merge Changes</h2>
    <p>If we have a transaction with a title and amount, device A can update its title field and amount field and record two changes in the CRDT changes map.</p>
${await code(`
transaction (d21b962f-7fe7-46e4-b87d-8262cedddbad)
  title: "Dinner"
  amount: 48
`, "text")}
    <p>Device A Changes:</p>
${await code(`
transaction (d21b962f-7fe7-46e4-b87d-8262cedddbad)
  title: "Dinner @ Restaurant"
  amount: 55
`, "text")}
${await code(`
CRDTChanges: {
  transactions: {
    "d21b962f-7fe7-46e4-b87d-8262cedddbad": {
      Title: {
        timestamp: {
          physical_ms: 1787401976423,
          logical: 0,
          device_id: "6aa1d3d8-7a52-44d6-b232-cb0f79652f49"
        },
        operation: Update,
        payload: "Dinner @ Restaurant"
      },
      amount: {
        timestamp: {
          physical_ms: 1787401978118,
          logical: 0,
          device_id: "6aa1d3d8-7a52-44d6-b232-cb0f79652f49"
        },
        operation: Update,
        payload: 55
      },
    }
  }
}
`, "json")}
    <p>Device B can change the amount on the same transaction a few seconds later.</p>
${await code(`
transaction (d21b962f-7fe7-46e4-b87d-8262cedddbad)
  title: "Dinner"
  amount: 58
`, "text")}
${await code(`
CRDTChanges: {
  transactions: {
    "d21b962f-7fe7-46e4-b87d-8262cedddbad": {
      amount: {
        timestamp: {
          physical_ms: 1787401989502,
          logical: 0,
          device_id: "a1b2c3d4-81a2-4b3c-9e0f-5a6b7c8d9e0f"
        },
        operation: Update,
        payload: 58
      },
    }
  }
}
`, "json")}
    <p>When both devices sync through a cloud service, both apps need to merge the other person's changes. We have the CRDT map, so it's easy.</p>
    <p>Notice that the cloud service isn't actually doing the conflict resolution here. It could just be a dumb file store. The clients can exchange CRDT state and independently calculate the same result.</p>
${await code(`
Device A  <--->  Cloud Drive  <--->  Device B
`, "text")}
    <p>Device A can compare the timestamps of the two value field changes and determine that device B's amount wins.</p>
${await code(`
Device A
---
amount: {
  timestamp: {
    physical_ms: 1787401978118,
    logical: 0,
    device_id: "6aa1d3d8-7a52-44d6-b232-cb0f79652f49"
  },
  operation: Update,
  payload: 55
}
`, "json")}
${await code(`
Device B
---
amount: {
  timestamp: {
    physical_ms: 1787401989502,
    logical: 0,
    device_id: "a1b2c3d4-81a2-4b3c-9e0f-5a6b7c8d9e0f"
  },
  operation: Update,
  payload: 58
}
`, "json")}
${await code(`
Merged Transaction on Device A:
transaction (d21b962f-7fe7-46e4-b87d-8262cedddbad)
title: "Dinner @ Restaurant"
amount: 58
`, "text")}
    <p>Device B will directly apply the title change and discard the value change as it is older.</p>
${await code(`
Merged Transaction on Device B:
transaction (d21b962f-7fe7-46e4-b87d-8262cedddbad)
  title: "Dinner @ Restaurant"
  amount: 58
`, "text")}
    <h2>Delete Always Wins</h2>
    <p>Deletes are a special case.</p>
${await code(`
struct CRDTChanges {
    category_tombstones:    HashMap<Uuid, HlcTimestamp>,
    transaction_tombstones: HashMap<Uuid, HlcTimestamp>,
    // + more fields
}
`, "rust")}
    <p>In my architecture delete always wins. I do not want an update after a delete to resurrect an item. This is my choice and an opinion of course, but I think it makes sense for the application I'm building. This means that for a delete I only need to store a UUID and timestamp.</p>
    <p>This collection can grow forever. In fact, you might notice that with this type of CRDT we have quite a bit of data storage overhead. That is true, but for most use cases on modern hardware we're talking about very small amounts of data either way. In my case, the size of an average monthly budget is 40kb. And even if you keep one budget file for a whole year, you will probably not reach 1 megabyte with normal use.</p>
    <h2>CRDTs Do Not Implement Correctness - Only Consistency</h2>
    <p>CRDTs don't magically know which user's change is correct. They do not have access to your business purpose. If two users change the same bank transaction from $55 to $58, then no algorithm can infer that one is the true change - all CRDTs do is describe how they should reconcile according to the conflict-resolution rules you have defined.</p>
    <p>If you need to be able to resolve the conflict by doing the right kind of merge, CRDTs may not be good enough on their own. You need to implement additional application specific rules. But when your merge rules are enough to reach a common result, they work great.</p>
    <h2>Further Readings</h2>
    <p>If you are on your way to implementing CRDT-based merging in your software, I would recommend the following research papers - they are short and detailed:</p>
  `,
  references: [
    {
      author: "Kulkarni, S., Demirbas, M., Madeppa, D., Avva, B., Leone, M.",
      year: "2014",
      title: "Logical Physical Clocks and Consistent Snapshots in Globally Distributed Databases",
      source: "Department of Computer Science and Engineering, University at Buffalo",
      url: "https://cse.buffalo.edu/tech-reports/2014-04.pdf",
    },
    {
      author: "Preguiça, N.",
      title: "Conflict-free Replicated Data Types: An Overview",
      source: "arXiv",
      url: "https://arxiv.org/pdf/1806.10254",
    },
  ]
};
