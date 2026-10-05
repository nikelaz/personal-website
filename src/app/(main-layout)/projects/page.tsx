import type { Metadata } from "next";
import Container from "@/components/container";
import ProjectCard from "@/components/project-card";
import projects from "@/data/projects";

export const metadata: Metadata = {
  title: { absolute: "Projects | Nikola Lazarov" },
  description: "Software projects by Nikola Lazarov, including native desktop apps, systems software, audio tools, graphics tools, and developer libraries.",
  openGraph: {
    title: "Projects | Nikola Lazarov",
    description: "Software projects by Nikola Lazarov, including native desktop apps, systems software, audio tools, graphics tools, and developer libraries.",
    type: "website",
    url: "https://nikolalazarov.com/projects",
  },
  twitter: {
    card: "summary",
    title: "Projects | Nikola Lazarov",
    description: "Software projects by Nikola Lazarov, including native desktop apps, systems software, audio tools, graphics tools, and developer libraries.",
    creator: "@nikelaz",
  },
  alternates: {
    canonical: "/projects",
  },
};

const Projects = () => {
  return (
    <Container>
      <section>
        <header className="flex flex-wrap justify-between items-center gap-4 md:gap-6 mb-12">
          <h1 className="leading-none">Projects</h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Projects;
