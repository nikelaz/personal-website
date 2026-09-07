const retrievalKit: Project = {
  slug: "retrieval-kit",
  name: "Retrieval Kit",
  shortDescription: "Rust library for local document ingestion, vector search, and retrieval.",
  categories: ["Rust", "Libraries", "AI Infrastructure"],
  technologies: ["Rust", "ONNX Runtime", "LanceDB"],
  repositoryUrl: "https://github.com/nikelaz/retrieval-kit",
  heroImage: {
    src: "/projects/retrieval-kit-hero.webp",
    alt: "Rust code snippet using Retrieval Kit to initialize a local LanceDB-backed store, ingest documents and run vector search",
  },
  screenshots: [
    {
      src: "/projects/retrieval-kit-hero.webp",
      alt: "Code example creating an RKit instance with LanceDB storage and ONNX Runtime embeddings, then running semantic search",
    },
  ],
  featured: true,
  story: "I wanted to understand what a local retrieval system looks like when the pieces are treated as a reusable library rather than an application-specific pipeline.",
  sections: [
    {
      heading: "Why I Built It",
      body: [
        "Retrieval-augmented systems are usually built as bespoke pipelines: application code tangled with a vector database, an embedding model and a pile of glue. I wanted to pull those pieces apart into a library with a small, composable API.",
        "Everything had to run locally. Embeddings through ONNX Runtime, storage in LanceDB, no cloud dependency - both for privacy and to understand exactly what the components cost on ordinary hardware.",
        "The MCP angle came from the same instinct: if retrieval is a clean library, exposing it as tool definitions for LLM integrations should be a function call, not a project.",
      ],
    },
    {
      heading: "What I Wanted to Learn",
      body: [
        "The mechanics of local vector search end to end: chunking, embedding, storage, similarity search and where the performance actually goes.",
        "Running transformer-based embedding models locally through ONNX Runtime, including what it takes to make that fully offline.",
        "What a retrieval API looks like when it is designed for other developers instead of for one application.",
      ],
    },
    {
      heading: "Technical Overview",
      body: [
        "Retrieval Kit ships document ingestion (single document, batch, file and glob), LanceDB storage for documents, chunks, vectors and full-text search, and ONNX Runtime embeddings through the all-MiniLM-L12-v2 model.",
        "The API surface covers semantic search, keyword search and document lifecycle operations - list, get, delete - behind a single RKit entry point.",
        "Embeddings can be downloaded from Hugging Face or pointed at local asset paths, making offline operation a configuration choice rather than a code change.",
        "JSON tool definitions and invocation helpers are built in, so MCP-style integrations can describe and invoke retrieval without bespoke glue.",
      ],
    },
    {
      heading: "Interesting Engineering Decisions",
      body: [
        "LanceDB as the storage engine: an embedded, columnar vector store that keeps the whole system local with no server process.",
        "ONNX Runtime as the embedding substrate rather than a Python sidecar, keeping the library a pure Rust dependency.",
        "Designing the tool-definition layer alongside the core API instead of bolting it on, which forced the API itself to stay small and well-named.",
        "Async throughout, since ingestion and search are I/O-shaped workloads even when fully local.",
      ],
    },
    {
      heading: "Challenges & Trade-offs",
      body: [
        "Model assets are heavyweight. Making offline mode work means shipping or locating tokenizer, model and pooling configuration explicitly - the ergonomics of local-first ML are genuinely hard.",
        "Hybrid search (semantic plus keyword) raises ranking questions with no obvious right answers; fusing results is a design space, not a solved problem.",
        "The all-MiniLM-L12-v2 model is a deliberate trade: small and fast enough for local use, at the cost of embedding quality on specialized domains.",
      ],
    },
    {
      heading: "What I Learned",
      body: [
        "How local retrieval stacks fit together and which layer dominates latency (it is rarely the vector math).",
        "What ONNX Runtime makes easy and what it makes awkward when running transformer models outside Python.",
        "How much API design matters when the goal is reusability - the constraints of being a library expose bad seams immediately.",
        "The practical state of local-first AI infrastructure in Rust: further along than most people assume, with sharp edges exactly where you would expect.",
      ],
    },
  ],
  relatedArticles: [],
  relatedVideos: [],
  ogImage: "og-retrieval-kit.webp",
};

export default retrievalKit;
