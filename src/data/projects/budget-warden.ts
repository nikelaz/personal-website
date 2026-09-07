const budgetWarden: Project = {
  slug: "budget-warden",
  name: "Budget Warden",
  shortDescription: "Cross-platform native budgeting application built around a shared Rust core.",
  categories: ["Native", "Rust", "Distributed Systems"],
  technologies: ["Rust", "FFI", "CRDT", "Native"],
  repositoryUrl: "https://github.com/nikelaz/budget-warden-next",
  homepageUrl: "https://www.budgetwarden.com/",
  heroImage: {
    src: "/projects/budget-warden-hero.webp",
    alt: "Three phone screenshots of the Budget Warden app showing budget categories, spending breakdown charts and saved budgets",
  },
  screenshots: [
    {
      src: "/projects/budget-warden-hero.webp",
      alt: "Budget Warden on iPhone: planned versus actual budget screens, spending and savings breakdowns, and the budgets list",
    },
    {
      src: "/projects/budget-warden-1.webp",
      alt: "Budget Warden category screen listing income and expense categories with planned amounts for June 2026",
    },
    {
      src: "/projects/budget-warden-2.webp",
      alt: "Budget Warden reporting screen with expense and savings breakdown charts",
    },
    {
      src: "/projects/budget-warden-3.webp",
      alt: "Budget Warden budgets list showing monthly budgets including a Greece Trip budget",
    },
    {
      src: "/projects/budget-warden-architecture.webp",
      alt: "Diagram of Budget Warden's architecture: a Rust core with generated Swift, Kotlin and C# bindings wrapped by native macOS, iOS, Windows and Android clients",
    },
  ],
  featured: true,
  story: "Budget Warden started as a personal finance application, but became an experiment in building software around local ownership of data. I moved the core domain into Rust and built native clients around it, which gave me practical problems to solve across FFI boundaries, persistence, synchronization and platform-specific application architectures.",
  sections: [
    {
      heading: "Why I Built It",
      body: [
        "I wanted a budgeting tool that treats my financial data the way I treat source code: local files I own, that sync the way I choose, and that outlive any particular vendor's business model.",
        "Most personal finance apps are web wrappers or subscription businesses first. I wanted to prove the opposite is viable - a genuinely native app per platform, no account required, with budgets stored as portable .budget files.",
        "It also became the most demanding Rust project I have worked on: a full domain model, validation, persistence, reporting and synchronization, all living in one shared core.",
      ],
    },
    {
      heading: "What I Wanted to Learn",
      body: [
        "What it takes to share real domain logic across four platforms through a single Rust core with generated FFI bindings.",
        "Conflict-free Replicated Data Types (CRDTs) well enough to implement one - not as a demo, but as the synchronization backbone of shipped software.",
        "The native toolchains themselves: SwiftUI on macOS and iOS, WinUI 3 on Windows, Jetpack Compose on Android, and the trade-offs of each.",
      ],
    },
    {
      heading: "Architecture",
      body: [
        "The core/ directory is the canonical Rust implementation: models, validation, a binary codec, CRDT merge logic, reporting, money arithmetic and legacy migration. Everything else is a client of that core.",
        "Bindings from Rust to each platform are generated rather than hand-written. A configuration file (boltffi.toml) drives generation of Swift, Kotlin/JNI and C# bindings, which the platform projects consume directly.",
        "On Apple platforms, a Swift convenience layer (apple-core) wraps the generated package before the SwiftUI macOS and iOS clients use it. Windows consumes the generated C# bindings through a local BoltFFI NuGet package. Android layers Kotlin document-provider I/O over the generated JNI bindings.",
        "There is no app-managed cloud synchronization. Budgets are local .budget files that users can store and sync wherever they like.",
      ],
    },
    {
      heading: "Interesting Engineering Decisions",
      body: [
        "Last-Writer-Wins CRDTs keyed by Hybrid Logical Clocks with device IDs as deterministic tie-breakers, so any two budget files merge to the same state regardless of merge order - the subject of a separate deep-dive article.",
        "A one-way dependency rule: platform code never re-implements domain logic, it only calls the core. Every client stays thin by construction.",
        "Generated bindings instead of a hand-maintained FFI layer, so adding a domain API once makes it available on all four platforms.",
        "Money as a dedicated type in the core rather than floating-point values leaking into domain logic.",
      ],
    },
    {
      heading: "Challenges & Trade-offs",
      body: [
        "Four native toolchains in one repository is a constant tax: Xcode, Gradle, .NET and Rust toolchains all have to stay buildable together, and CI must cover each client.",
        "Debugging across an FFI boundary is a skill of its own - a crash inside the core surfaces as an opaque failure in Swift, Kotlin or C#, so logging and error translation at the boundary matter enormously.",
        "Local files mean no server to enforce invariants, so convergence of concurrent edits had to be guaranteed by data structure design rather than by an authority.",
        "The payoff is real, though: the same fix to the core lands on every platform at once, and the clients remain genuinely native.",
      ],
    },
    {
      heading: "What I Learned",
      body: [
        "CRDTs in production: where LWW is enough, where it silently loses intent, and how HLC timestamps plus deterministic tie-breakers make convergence provable.",
        "How each platform's toolchain and UI framework thinks - SwiftUI's state model, Compose's recomposition, WinUI's data binding - and how differently they all consume the same core.",
        "That the boundary is the product. Most of the hard engineering lives exactly where Rust meets Swift, Kotlin and C#.",
        "How to keep a multi-platform monorepo healthy enough to actually ship from.",
      ],
    },
  ],
  relatedArticles: ["how-i-made-a-local-app-support-concurrent-file-editing-with-crdts"],
  relatedVideos: ["vY2_W2Ni-dw", "JhDRDa6193A"],
  ogImage: "og-budget-warden.webp",
};

export default budgetWarden;
