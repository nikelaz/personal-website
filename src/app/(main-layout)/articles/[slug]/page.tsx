import References from "@/components/references";
import IconTag from "@/components/icon-tag";
import { notFound } from "next/navigation";
import IconDate from "@/assets/icons/date.svg";
import IconUser from "@/assets/icons/user.svg";
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

      <div className="flex items-center gap-8 text-sm text-neutral-600 dark:text-neutral-300 mb-4">
        <IconTag title={new Date(article.date).toLocaleDateString()}>
          <IconDate width="1em" height="1em" />
        </IconTag>
        <IconTag title={article.author}>
          <IconUser width="1em" height="1em" />
        </IconTag>
      </div>

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
