import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/container";
import Card from "@/components/card";
import Tag from "@/components/tag";
import Button from "@/components/button";
import ProjectCard from "@/components/project-card";
import videos from "@/data/videos";
import articles from "@/data/articles";
import { getFeaturedProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Nikola Lazarov - Full-Stack Developer & YouTube Educator",
  description: "Personal website of Nikola Lazarov - Full-stack developer, YouTube educator, and founder of Budget Warden. Explore software engineering tutorials, technical articles, and open-source projects.",
  openGraph: {
    title: "Nikola Lazarov - Full-Stack Developer & YouTube Educator",
    description: "Personal website of Nikola Lazarov - Full-stack developer, YouTube educator, and founder of Budget Warden. Explore software engineering tutorials, technical articles, and open-source projects.",
    type: "website",
    images: [
      {
        url: "https://nikolalazarov.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nikola Lazarov - Full-Stack Developer & YouTube Educator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikola Lazarov - Full-Stack Developer & YouTube Educator",
    description: "Personal website of Nikola Lazarov - Full-stack developer, YouTube educator, and founder of Budget Warden. Explore software engineering tutorials, technical articles, and open-source projects.",
    creator: "@nikelaz",
  },
};

// Images
import nlazarovImgSrc from "@/assets/nikola-lazarov.webp";

const Home = () => {
  return (
    <>
      <section className="hero pt-2 border-b-1 border-neutral-300/50 dark:border-neutral-700/50">
        <Container className="grid grid-cols-12 gap-6 items-center">
          <div className="hidden sm:block hero-image flex-shrink-0 col-span-5 self-end justify-self-center">
            <Image loading="eager" fetchPriority="high" src={nlazarovImgSrc} alt="Nikola Lazarov" width={427} height={596} /> 
          </div>
          <div className="pt-4 pb-6 sm:pt-6 pb-8 col-span-12 sm:col-span-6">
            <h1 className="mb-6">Hey There!</h1>
            <p className="mb-4">I&apos;m a front-end developer transitioning toward C++, Rust, Linux, and systems programming. I enjoy building native applications and learning through hands-on projects.</p>
            <p className="mb-4">Alongside my full-time work, I create educational content on my <a href="https://youtube.com/@nltech1" target="_blank" rel="noopener" className="underline">YouTube channel</a> and build all kinds of side projects.</p>
            <p className="mb-6">This is my personal website, where I share my projects, technical work, research, and things I&apos;m learning along the way.</p>
            <Button href="/about-me" icon="arrow">About Me</Button>
          </div>
        </Container>
      </section>
      <Container className="pt-8 pb-10 sm:pt-13 sm:pb-15">
        <section className="flex flex-col gap-6">
          <h2>Latest Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.slice(0, 4).map((video, index) => (  
              <Card key={video.id}>
                <Card.Image src={`https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg`} loading={index < 8 ? "eager"  : "lazy"} alt={`${video.title} video thumbnail`} />
                <Card.Content>
                  {video.tags ? (
                    <div className="flex items-center gap-2 flex-wrap">
                      {video.tags.map(tag => (
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
          <Button href="/videos" icon="arrow">All Videos</Button>
        </section>
        <section className="flex flex-col gap-6 pt-8 sm:pt-13">
          <h2>Selected Projects</h2>
          <p className="-mt-4">Native applications, systems software, graphics tools, and Rust/C++ libraries.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFeaturedProjects().slice(0, 4).map((project, index) => (
              <ProjectCard key={project.slug} project={project} eager={index < 4} />
            ))}
          </div>
          <Button href="/projects" icon="arrow">All Projects</Button>
        </section>
        <section className="flex flex-col gap-6 pt-8 sm:pt-13">
          <h2>Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((article) => (
              <Card key={article.slug}>
                <Card.Content>
                  <div className="flex items-center gap-2">
                    {article.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <Card.Link href={`/articles/${article.slug}`}>{article.title}</Card.Link>
                  <p>{article.summary}</p>
                </Card.Content>
              </Card>
            ))}
          </div>
          <Button href="/articles" icon="arrow">All Articles</Button>
        </section>
        
      </Container>
    </>
  );
}

export default Home;
