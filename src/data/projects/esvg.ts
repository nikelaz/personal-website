const esvg: Project = {
  slug: "esvg",
  name: "ESVG",
  shortDescription: "A Rust tool for making SVG files smaller.",
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
  sections: [
    {
      heading: "Overview",
      body: ["I'm building ESVG to make SVG files smaller without changing how they look. It tries different optimizations and keeps the ones that help."],
    },
  ],
  relatedArticles: [],
  relatedVideos: [],
  ogImage: "og-esvg.webp",
};

export default esvg;
