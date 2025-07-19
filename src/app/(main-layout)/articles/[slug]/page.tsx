import type { Metadata } from "next";
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

export const generateMetadata = async (props: ArticleProps): Promise<Metadata> => {
  const { slug } = await props.params;
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${article.title} - Nikola Lazarov`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
      images: [
        {
          url: `/${article.ogImage || "og-image.png"}`,
          width: 1200,
          height: 630,
          alt: "Nikola Lazarov - Full-Stack Developer & YouTube Educator",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      creator: "@nikelaz",
    },
  };
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.summary,
    "author": {
      "@type": "Person",
      "name": article.author,
      "url": "https://nikolalazarov.com"
    },
    "datePublished": article.date,
    "dateModified": article.date,
    "publisher": {
      "@type": "Person",
      "name": "Nikola Lazarov",
      "url": "https://nikolalazarov.com"
    },
    "keywords": article.tags,
    "articleSection": "Technology",
    "inLanguage": "en-US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
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
