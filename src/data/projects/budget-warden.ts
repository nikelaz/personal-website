const budgetWarden: Project = {
  slug: "budget-warden",
  name: "Budget Warden",
  shortDescription: "A native budgeting app built around a shared Rust core.",
  categories: ["Native", "Rust", "Distributed Systems"],
  technologies: ["Rust", "FFI", "CRDT", "Native", "Swift", "SwiftUI", "C#", "WinUI", "Kotlin", "Jetpack Compose"],
  repositoryUrl: "https://github.com/nikelaz/budget-warden-next",
  homepageUrl: "https://www.budgetwarden.com/",
  heroImage: {
    src: "/projects/bw-ios-1.webp",
    alt: "Budget Warden on iOS and macOS",
  },
  screenshots: [
    {
      src: "/projects/bw-ios-1.webp",
      alt: "Budget Warden on iOS and macOS",
    },
    {
      src: "/projects/bw-windows-1.webp",
      alt: "Budget Warden on Windows",
    },
    {
      src: "/projects/bw-android-1.webp",
      alt: "Budget Warden on Android",
    },
  ],
  featured: true,
  sections: [
    {
      heading: "Overview",
      body: [
          "Budget Warden is not just a budgeting app. I spend an absurd amount of time on building it AND studying personal finance - the subject is a passion of mine and I wanted to build the best budgeting app I could. I initially wrote a cloud-based web & react native application. Then I completely pivoted it to a native local-first app with native UI on Mac, Windows, iOS and Android with a shared Rust core. The application is local-first but supports atomic write & merges with a CRDT data structure. This means you can share a budget warden file on a cloud drive and work simoultaniously on the file on multiple devices without a cloud service running.",
          "It's a technical excellence project with which I tried to build a no-compromises desktop app and it might sound absurd spending so much time on a simple app the people would say they can \"vibe code\" in an hour, but I enjoyed building it and learned a ton. I still maintain it, work on it and use it every day."
      ],
    },
  ],
  relatedArticles: ["how-i-made-a-local-app-support-concurrent-file-editing-with-crdts"],
  relatedVideos: [
    "vY2_W2Ni-dw",
    "JhDRDa6193A",
    "1fLr0FB4FHA",
    "TtsapcuN_ac",
    "ZPLDvNzsVTI",
    "UcQP6u2ocdY",
    "xEKnSD3TKzI",
    "D_TpsGgVdwY",
  ],
  ogImage: "og-budget-warden.webp",
};

export default budgetWarden;
