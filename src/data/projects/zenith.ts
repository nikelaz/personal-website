const zenith: Project = {
  slug: "zenith",
  name: "Zenith",
  shortDescription: "A cross-platform desktop app for orchestrating native LLM harnesses.",
  categories: ["Native", "C++", "Developer Tools"],
  technologies: ["C-Style C++", "SDL3", "Dear ImGui", "SQLite", "CMake"],
  repositoryUrl: "https://github.com/nikelaz/zenith",
  heroImage: {
    src: "/projects/zenith-ui.webp",
    alt: "Zenith desktop application interface",
  },
  screenshots: [
    {
      src: "/projects/zenith-ui.webp",
      alt: "Zenith desktop application interface",
    },
  ],
  featured: true,
  sections: [
    {
      heading: "Overview",
      body: [
        "Zenith is a cross-platform native desktop app for orchestrating LLM coding harnesses. I built it to make working with these tools more efficient and enjoyable.",
        "It is written in C-Style C++, with a desktop interface built using SDL3 and Dear ImGui. Zenith is source-available under the PolyForm Shield License.",
      ],
    },
  ],
  relatedArticles: [],
  relatedVideos: [],
};

export default zenith;
