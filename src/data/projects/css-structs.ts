const cssStructs: Project = {
  slug: "css-structs",
  name: "CSS Structs",
  shortDescription: "Rust library for parsing, manipulating, and serializing CSS.",
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
  story: "I wanted to understand parser construction by building a real library rather than only studying parsing theory. CSS Structs models CSS as structured Rust types and provides parsing, manipulation and serialization capabilities.",
  sections: [
    {
      heading: "Why I Built It",
      body: [
        "Parsing is one of those topics that is easy to follow in a textbook and completely different when you need robust, incremental, error-tolerant behavior on real input.",
        "CSS was the right target: a grammar with real-world quirks (vendor prefixes, !important, comments in awkward places, malformed declarations) that forces a parser to be pragmatic rather than theoretically pure.",
        "I also wanted a small, complete library to publish - from API design through docs.rs documentation to a crates.io release.",
      ],
    },
    {
      heading: "What I Wanted to Learn",
      body: [
        "Parser combinators with nom: building grammar rules bottom-up and composing them into a full stylesheet parser.",
        "How to model a grammar as Rust types so that parse results are pleasant to consume and manipulate, not just syntax trees to be tolerated.",
        "Round-trip fidelity: parse, mutate, serialize back out - and keep the output recognizably equivalent to the input.",
      ],
    },
    {
      heading: "Technical Overview",
      body: [
        "The library exposes a small, layered API: Stylesheet for whole documents, CSSRule for individual rules, and declarations as typed key/value structures.",
        "Parsing is done with nom combinators, from the smallest units (identifiers, values, comments) up through declaration lists, rule bodies and full stylesheets.",
        "Every parsed type implements Display, which is what makes serialization a property of the data itself rather than a separate writer module.",
      ],
    },
    {
      heading: "Interesting Engineering Decisions",
      body: [
        "Parser combinators instead of a generator like LALRPOP. nom keeps everything in ordinary Rust functions, which made the grammar easy to unit test piece by piece.",
        "Structured types over a generic AST. The API is shaped around what CSS actually contains - rules, declarations, values - so consumers write domain code instead of tree-walking code.",
        "Round-trip serialization as a first-class requirement from the start, which constrained the internal representation in healthy ways.",
      ],
    },
    {
      heading: "Challenges & Trade-offs",
      body: [
        "Real-world CSS is malformed more often than not in the wild. Deciding what to accept, what to skip and what to reject - and keeping those rules consistent - was harder than the clean-grammar case.",
        "Full CSS is enormous: selectors, at-rules, nested functions and custom properties each have their own grammar. Scoping the library to stylesheets, rules and declarations kept it shippable while still useful.",
        "Combinator parsing is elegant but error messages are its weak spot. Producing genuinely helpful parse errors from nested combinators required deliberate work.",
      ],
    },
    {
      heading: "What I Learned",
      body: [
        "How to think about grammars compositionally, and why parser combinators suit language-adjacent tooling so well.",
        "The difference between parsing for compilation and parsing for manipulation - the latter has to preserve enough of the source to be worth serializing back.",
        "The small logistics of publishing a Rust library: semver discipline, docs, examples and the crates.io release process.",
      ],
    },
  ],
  relatedArticles: [],
  relatedVideos: [],
  ogImage: "og-css-structs.webp",
};

export default cssStructs;
