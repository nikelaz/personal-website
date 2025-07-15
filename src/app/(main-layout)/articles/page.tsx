//import Input from "@/components/input";
import Card from "@/components/card";
import Tag from "@/components/tag";
import Container from "@/components/container";

const Articles = () => {
  return (
    <Container>
      <section>
        <header className="flex flex-wrap justify-between items-center gap-4 md:gap-6 mb-12">
          <h1 className="leading-none">Articles</h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <Card.Content>
              <div className="flex items-center gap-2">
                <Tag>Artificial Intelligence</Tag>
              </div>
              <Card.Link href="/articles/the-reasoning-mirage-why-ai-models-might-just-be-really-good-at-pretending">The Reasoning Mirage: Why AI Models Might Just Be Really Good at Pretending</Card.Link>
              <p className="text-sm text-neutral-400">Apple&apos;s &quot;The Illusion of Thinking&quot; suggests reasoning models may simulate, not perform, true reasoning—excelling at pattern matching but failing as problem complexity rises.</p>
            </Card.Content>
          </Card>
        </div>
      </section>
    </Container>
  );
};

export default Articles;
