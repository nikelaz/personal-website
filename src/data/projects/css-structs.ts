const cssStructs: Project = {
  slug: "css-structs",
  name: "CSS Structs",
  shortDescription: "A Rust library for working with CSS.",
  categories: ["Rust", "Libraries"],
  technologies: ["Rust", "nom", "Parser"],
  repositoryUrl: "https://github.com/nikelaz/css-structs",
  homepageUrl: "https://crates.io/crates/css-structs",
  heroImage: {
    src: "/projects/css-structs-hero.webp",
    alt: "Rust code snippet using the CSS Structs library to parse a stylesheet and print the parsed rules",
  },
  screenshots: [
    {
      src: "/projects/css-structs-hero.webp",
      alt: "Code example parsing CSS with Stylesheet::from_string and round-tripping it back to a string",
    },
  ],
  featured: true,
  sections: [
    {
      heading: "Overview",
      body: ["I built CSS Structs because I wanted to learn a bit about parsing and needed a CSS parser for my SVG optimization project. It's by no means a complete parser that supports the entire standard - it does what I needed it to do at the time. The library lets you parse CSS to structs, make changes, and turn it back into a stylesheet."],
    },
  ],
  relatedArticles: [],
  relatedVideos: [],
  ogImage: "og-css-structs.webp",
};

export default cssStructs;
