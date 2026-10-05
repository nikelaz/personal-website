import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/project-gallery";
import Tag from "@/components/tag";
import Button from "@/components/button";
import Card from "@/components/card";
import projects, { getProject } from "@/data/projects";
import articles from "@/data/articles";
import videos from "@/data/videos";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  return projects.map((project) => ({
    slug: project.slug,
  }));
};

type ProjectPageProps = Readonly<{
  params: Promise<{
    slug: string;
  }>;
}>;

const seoTitle = (project: Project) => {
  switch (project.slug) {
    case "machina":
      return "Machina — Native Linux System Information App";
    case "ctldash":
      return "CTL Dash — COSMIC systemd Service Manager";
    case "budget-warden":
      return "Budget Warden — Native Budgeting App with a Rust Core";
    case "css-structs":
      return "CSS Structs — CSS Parser Library for Rust";
    case "esvg":
      return "ESVG — Experimental SVG Optimizer in Rust";
    case "retrieval-kit":
      return "Retrieval Kit — Local Vector Search Library for Rust";
    default:
      return project.name;
  }
};

const seoDescription = (project: Project) => {
  return `${project.name} is ${project.shortDescription.charAt(0).toLowerCase()}${project.shortDescription.slice(1)} Built with ${project.technologies.join(", ")}.`;
};

const renderDescriptionText = (text: string) => {
  const linkPattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match = linkPattern.exec(text);

  while (match) {
    const [, label, href] = match;
    const isExternal = href.startsWith("https://") || href.startsWith("http://");
    const isInternal = href.startsWith("/") && !href.startsWith("//");

    if (!isExternal && !isInternal) {
      match = linkPattern.exec(text);
      continue;
    }

    parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a
        key={`${match.index}-${href}`}
        href={href}
        className="underline underline-offset-2"
        {...(isExternal ? { target: "_blank", rel: "noopener" } : {})}
      >
        {label}
      </a>,
    );
    lastIndex = linkPattern.lastIndex;
    match = linkPattern.exec(text);
  }

  parts.push(text.slice(lastIndex));
  return parts;
};

export const generateMetadata = async (props: ProjectPageProps): Promise<Metadata> => {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const title = seoTitle(project);
  const description = seoDescription(project);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      tags: [...project.technologies, ...project.categories],
      images: [
        {
          url: `https://nikolalazarov.com/projects/${project.ogImage || "og-image.png"}`,
          width: 1200,
          height: 630,
          alt: `${project.name} — ${project.shortDescription}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@nikelaz",
    },
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
};

const ProjectPage = async (props: ProjectPageProps) => {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    return notFound();
  }

  const relatedArticles = (project.relatedArticles || [])
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article): article is Article => Boolean(article));

  const relatedVideos = (project.relatedVideos || [])
    .map((id) => videos.find((video) => video.id === id))
    .filter((video): video is Video => Boolean(video));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.name,
    "description": project.shortDescription,
    "applicationCategory": project.categories.join(", "),
    "operatingSystem": project.categories.includes("Linux") ? "Linux" : "Cross-platform",
    "author": {
      "@type": "Person",
      "name": "Nikola Lazarov",
      "url": "https://nikolalazarov.com"
    },
    "url": `https://nikolalazarov.com/projects/${project.slug}`,
    "sameAs": [project.repositoryUrl],
    "keywords": [...project.technologies, ...project.categories],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <header className="flex flex-col gap-4">
        <h1 className="mb-0">{project.name}</h1>
        <p className="text-lg">{renderDescriptionText(project.shortDescription)}</p>
        <div className="flex items-center gap-2 flex-wrap">
          {project.technologies.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <Button href={project.repositoryUrl} target="_blank" rel="noopener">View on GitHub ↗</Button>
          {project.homepageUrl ? (
            <Button href={project.homepageUrl} target="_blank" rel="noopener" variant="secondary">Website ↗</Button>
          ) : null}
          {project.downloadUrl ? (
            <Button href={project.downloadUrl} target="_blank" rel="noopener" variant="secondary">Download ↗</Button>
          ) : null}
        </div>
      </header>

<ProjectGallery name={project.name} screenshots={project.screenshots} />

      {project.sections?.map((section) => (
        <section key={section.heading} className="flex flex-col gap-4">
          <h2 className="mb-0">{section.heading}</h2>
          {section.body.map((paragraph, index) => (
            <p key={index}>{renderDescriptionText(paragraph)}</p>
          ))}
        </section>
      ))}

      {relatedArticles.length || relatedVideos.length ? (
        <section className="flex flex-col gap-4">
          <h2 className="mb-0">Related Articles & Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((article) => (
              <Card key={article.slug}>
                <Card.Content>
                  <div className="flex items-center gap-2 flex-wrap">
                    {article.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <Card.Link href={`/articles/${article.slug}`}>{article.title}</Card.Link>
                  <p>{article.summary}</p>
                </Card.Content>
              </Card>
            ))}
            {relatedVideos.map((video) => (
              <Card key={video.id}>
                <Card.Image src={`https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg`} alt={`${video.title} video thumbnail`} />
                <Card.Content>
                  {video.tags ? (
                    <div className="flex items-center gap-2 flex-wrap">
                      {video.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  ) : null}
                  <Card.Link href={`https://youtu.be/${video.id}`} target="_blank" rel="noopener">{video.title}</Card.Link>
                  <p>{video.summary}</p>
                </Card.Content>
              </Card>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ProjectPage;
