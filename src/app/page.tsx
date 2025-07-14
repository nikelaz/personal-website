import Image from "next/image";
import Container from "@/components/container";
import Card from "@/components/card";
import Tag from "@/components/tag";
import Button from "@/components/button";

// Images
import nlazarovImgSrc from "@/assets/nikola-lazarov.webp";

const Home = () => {
  return (
    <>
      <section className="hero pt-2 border-b-1 border-neutral-700/50">
        <Container className="grid grid-cols-12 gap-6 items-center">
          <div className="hero-image flex-shrink-0 col-span-5 justify-self-center">
            <Image src={nlazarovImgSrc} alt="Nikola Lazarov" width={427} height={596} /> 
          </div>
          <div className="col-span-6">
            <h1 className="mb-6">Hey There!</h1>
            <p className="mb-4">I"m a full-stack developer, passionate about science, technology and education. I balance my full-time job as a front-end developer with the creation of educational content on my YouTube channel. Beyond my professional pursuits, I love building all sorts of fun side-projects.</p>
            <p>This is my personal website, where I will share my latest work, research and fun side-projects.</p>
          </div>
        </Container>
      </section>
      <Container className="pt-13 pb-15">
        <section className="flex flex-col gap-6">
          <h2>Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <Card.Content>
                <div className="flex items-center gap-2">
                  <Tag>Artificial Intelligence</Tag>
                </div>
                <Card.Link href="/articles/the-reasoning-mirage-why-ai-models-might-just-be-really-good-at-pretending">The Reasoning Mirage: Why AI Models Might Just Be Really Good at Pretending</Card.Link>
                <p className="text-sm text-neutral-400">Apple"s "The Illusion of Thinking" suggests reasoning models may simulate, not perform, true reasoning—excelling at pattern matching but failing as problem complexity rises.</p>
              </Card.Content>
            </Card>
          </div>
          <Button href="/articles" icon="arrow">View All Articles</Button>
        </section>
      </Container>
    </>
  );
}

export default Home;
