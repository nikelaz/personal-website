const retrievalKit: Project = {
  slug: "retrieval-kit",
  name: "Retrieval Kit",
  shortDescription: "A Rust library for local document search.",
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
  sections: [
    {
      heading: "Overview",
      body: [
          "This Rust library lets you quickly build RAG retrieval for a collection of documents. I built it because I needed it for work at the time - we had multiple documentation sites to ingest and use in an MCP. It's ergonomic and high-level but also configurable so that it works with multiple models/embeddings and different vector db backends can be implemented for it."
      ],
    },
  ],
  relatedArticles: [],
  relatedVideos: [],
  ogImage: "og-retrieval-kit.webp",
};

export default retrievalKit;
