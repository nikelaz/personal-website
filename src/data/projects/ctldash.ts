const ctldash: Project = {
  slug: "ctldash",
  name: "CTL Dash",
  shortDescription: "A native app for managing systemd services for the Cosmic Desktop Environment.",
  categories: ["Native", "Linux", "Rust", "Developer Tools"],
  technologies: ["Rust", "Linux", "COSMIC", "systemd"],
  repositoryUrl: "https://github.com/nikelaz/ctldash",
  homepageUrl: "https://nikelaz.github.io/ctldash/",
  heroImage: {
    src: "/projects/ctldash-hero.webp",
    alt: "CTL Dash application window listing systemd system services with their descriptions, states and sub-states",
  },
  screenshots: [
    {
      src: "/projects/ctldash-hero.webp",
      alt: "CTL Dash services list showing system services such as abrt-journal-core and accounts-daemon with active and running states",
    },
    {
      src: "/projects/ctldash-details.webp",
      alt: "CTL Dash service details view showing the unit file, status controls and recent journal logs for a single systemd service",
    },
  ],
  featured: true,
  sections: [
    {
      heading: "Overview",
      body: [
          "I built CTL Dash because I wanted to support the new Cosmic desktop environment when it was brand new and to contribute to the desktop Linux ecosystem. CTL Dash allows you to manage systemd services - start/stop/enable/disable/logs. It's a native COSMIC app written in Rust with the native Libcosmic. It communicates with systemd through the D-Bus."
      ],
    },
  ],
  relatedArticles: [],
  relatedVideos: [],
  ogImage: "og-ctldash.webp",
};

export default ctldash;
