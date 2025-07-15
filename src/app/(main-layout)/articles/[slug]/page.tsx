import References from "@/components/references";
import { notFound } from "next/navigation";
import articles from "@/data/articles";

export const generateStaticParams = async () => {
  return articles.map((article) => ({
    slug: article.slug,
  }));
};

type ArticleProps = Readonly<{
  params: Promise<{
    slug: string;
  }>;
}>;

const Article = async (props: ArticleProps) => {
  const { slug } = await props.params;
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return notFound();
  }

  return (
    <>
      <h1>{article.title}</h1>

      <div className="flex flex-col gap-6" dangerouslySetInnerHTML={{ __html: article.html }} />

      <References>
        {article.references?.map((reference, index) => (
          <References.Item
            key={index}
            id={index + 1}
            author={reference.author}
            year={reference.year}
            title={reference.title}
            source={reference.source}
            url={reference.url}
          />
        ))}
      </References>
    </>
  );
};

export default Article;
