const esvg: Project = {
  slug: "esvg",
  name: "ESVG",
  shortDescription: "Experimental Rust tool for optimizing SVG representations.",
  categories: ["Rust", "Graphics", "Developer Tools"],
  technologies: ["Rust", "SVG", "Graphics"],
  repositoryUrl: "https://github.com/nikelaz/esvg-rs",
  heroImage: {
    src: "/projects/esvg-hero.webp",
    alt: "Diagram of ESVG's Competitive Transformer Optimization: an input SVG fanning out through competing transformer plugins, with an Arbiter selecting the smallest output that renders identically",
  },
  screenshots: [
    {
      src: "/projects/esvg-hero.webp",
      alt: "ESVG pipeline diagram showing Path Simplification, Element Removal and Transform Application transformers competing in parallel before the Arbiter picks the winner",
    },
  ],
  featured: true,
  story: "I became interested in SVG optimization as a small graphics and tooling problem: how can multiple transformations compete to produce a smaller representation without changing what the user actually sees? ESVG explores that idea through a pipeline of competing transformations.",
  sections: [
    {
      heading: "Why I Built It",
      body: [
        "SVG files ship with an enormous amount of editor baggage: unused definitions, redundant transforms, precision that no renderer can display. The tools that clean this up felt like black boxes, and I wanted to understand the problem from the inside.",
        "The specific idea I wanted to explore was competitive optimization - running multiple transformers against the same input and letting an arbiter keep whichever result is genuinely smaller. Most optimization pipelines apply transformations sequentially and hope each one helps.",
      ],
    },
    {
      heading: "What I Wanted to Learn",
      body: [
        "The SVG object model at the document level: which elements and attributes carry visual meaning, and which are just editor history.",
        "Plugin-style architecture in Rust - transformers as independent, composable units that share a common interface.",
        "How to reason about equivalence in vector graphics: two documents that render identically can look nothing alike as text.",
      ],
    },
    {
      heading: "Technical Overview",
      body: [
        "The design centers on an Arbiter that orchestrates a set of transformers. Each transformer is a specialized plugin applying one family of optimizations - simplifying paths, removing invisible or unused elements, applying and folding transforms.",
        "Transformers are evaluated against the same input. The Arbiter compares their outputs by resulting file size and keeps the most efficient one that preserves visual integrity, then continues the pipeline.",
        "Equivalence is defined perceptually: the optimized document must render identically or with differences too small to perceive.",
      ],
    },
    {
      heading: "Interesting Engineering Decisions",
      body: [
        "Competition over sequencing. Applying transformations blindly can make files larger or destroy fidelity; forcing transformations to compete means every accepted step has to prove itself in bytes.",
        "An arbiter as a separate orchestration component rather than logic smeared through each transformer, which keeps transformers dumb and testable.",
        "Treating rendered equivalence - not textual similarity - as the correctness criterion, which is what makes aggressive optimizations defensible.",
      ],
    },
    {
      heading: "Challenges & Trade-offs",
      body: [
        "This project is in very early development. Most of the planned transformers are not implemented and it cannot yet be used for real optimization work.",
        "Path simplification is where the hard graphics mathematics lives: flattening Béziers and reducing points while staying inside a perceptual error budget.",
        "Comparing rendered output automatically is its own research problem; establishing trustworthy equivalence checking is prerequisite to trusting the optimizer at all.",
      ],
    },
    {
      heading: "What I Learned",
      body: [
        "How much complexity hides inside 'just remove unused stuff' once precision, transforms and referencing semantics get involved.",
        "Why competition is a useful design pattern for optimization pipelines - it converts trust in heuristics into measurable comparisons.",
        "How vector graphics formats relate geometry, styling and rendering, and where information can be safely discarded.",
      ],
    },
  ],
  relatedArticles: [],
  relatedVideos: [],
  ogImage: "og-esvg.webp",
};

export default esvg;
