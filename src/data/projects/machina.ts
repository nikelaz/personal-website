const machina: Project = {
  slug: "machina",
  name: "Machina",
  shortDescription: "Native Linux system information and process viewer.",
  categories: ["Native", "Linux", "C++", "Systems"],
  technologies: ["C++23", "Linux", "ImGui", "OpenGL", "CMake"],
  repositoryUrl: "https://github.com/nikelaz/machina",
  downloadUrl: "https://github.com/nikelaz/machina/releases",
  heroImage: {
    src: "/projects/machina-hero.webp",
    alt: "Machina application window showing system information for a Fedora Linux machine, including kernel version, architecture, CPU and memory usage",
  },
  screenshots: [
    {
      src: "/projects/machina-hero.webp",
      alt: "Machina Info tab with OS, hostname, kernel, architecture, CPU load and memory usage readouts",
    },
    {
      src: "/projects/machina-processes.webp",
      alt: "Machina Processes tab listing running processes with sortable columns for PID, CPU and memory consumption",
    },
  ],
  featured: true,
  sections: [
    {
      heading: "Overview",
      body: [
        "I built Machina while learning Linux system programming and modern C++. Machina reads information from Linux interfaces such as /proc and uname and turns process, CPU and memory data into a native desktop application.",
        "I built this as I was studying the book [The Linux Programming Interface](https://man7.org/tlpi/).",
        "Even tough modern C++ is not my, I wanted to build something with it. Machina is a C++23 desktop application.", 
        "The UI is immediate mode, with Dear ImGui (using the OpenGL, GLFW backend).",
      ],
    },
  ],
  relatedArticles: [],
  relatedVideos: [],
  ogImage: "og-machina.webp",
};

export default machina;
