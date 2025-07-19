import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/container";
import Card from "@/components/card";
import Tag from "@/components/tag";
import Button from "@/components/button";
import videos from "@/data/videos";

export const metadata: Metadata = {
  title: "Nikola Lazarov - Full-Stack Developer & YouTube Educator",
  description: "Personal website of Nikola Lazarov - Full-stack developer, YouTube educator, and founder of Budget Warden. Explore software engineering tutorials, technical articles, and open-source projects.",
  openGraph: {
    title: "Nikola Lazarov - Full-Stack Developer & YouTube Educator",
    description: "Personal website of Nikola Lazarov - Full-stack developer, YouTube educator, and founder of Budget Warden. Explore software engineering tutorials, technical articles, and open-source projects.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
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
            <p className="mb-4">I&apos;m a full-stack developer, passionate about science, technology and education. I balance my full-time job as a front-end developer with the creation of educational content on my <a href="https://youtube.com/@nltech1" target="_blank" rel="noopener" className="underline">YouTube channel</a>. Beyond my professional pursuits, I love building all sorts of fun side-projects.</p>
            <p className="mb-6">This is my personal website, where I will share my latest work, research and fun side-projects.</p>
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
          <h2>Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <Card.Content>
                <div className="flex items-center gap-2">
                  <Tag>Artificial Intelligence</Tag>
                </div>
                <Card.Link href="/articles/the-reasoning-mirage-why-ai-models-might-just-be-really-good-at-pretending">The Reasoning Mirage: Why AI Models Might Just Be Really Good at Pretending</Card.Link>
                <p>Apple&apos;s &quot;The Illusion of Thinking&quot; suggests reasoning models may simulate, not perform, true reasoning—excelling at pattern matching but failing as problem complexity rises.</p>
              </Card.Content>
            </Card>
          </div>
          <Button href="/articles" icon="arrow">All Articles</Button>
        </section>
        
      </Container>
    </>
  );
}

export default Home;
