//import Input from "@/components/input";
import Card from "@/components/card";
import Tag from "@/components/tag";
import Container from "@/components/container";
import articles from "@/data/articles";

const Articles = () => {
  return (
    <Container>
      <section>
        <header className="flex flex-wrap justify-between items-center gap-4 md:gap-6 mb-12">
          <h1 className="leading-none">Articles</h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.slug}>
              <Card.Content>
                {article.tags ? (
                  <div className="flex items-center gap-2 flex-wrap">
                    {article.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                ) : null}
                <Card.Link href={`/articles/${article.slug}`}>{article.title}</Card.Link>
                <p>{article.summary}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Articles;
