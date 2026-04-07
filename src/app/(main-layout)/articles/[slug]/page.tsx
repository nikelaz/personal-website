import type { Metadata } from "next";
import References from "@/components/references";
import IconTag from "@/components/icon-tag";
import { notFound } from "next/navigation";
import IconDate from "@/assets/icons/date.svg";
import IconUser from "@/assets/icons/user.svg";
import articles from "@/data/articles";
import videos from "@/data/videos";

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
          url: `https://nikolalazarov.com/${article.ogImage || "og-image.png"}`,
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

  const relatedVideo = article.relatedVideoId
    ? videos.find((v) => v.id === article.relatedVideoId)
    : undefined;

  const videoStructuredData = relatedVideo ? {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": relatedVideo.title,
    "description": relatedVideo.summary,
    "thumbnailUrl": `https://i3.ytimg.com/vi/${relatedVideo.id}/maxresdefault.jpg`,
    "uploadDate": relatedVideo.date,
    "embedUrl": `https://www.youtube.com/embed/${relatedVideo.id}`,
    "url": `https://youtu.be/${relatedVideo.id}`,
  } : undefined;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      {videoStructuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoStructuredData)
          }}
        />
      ) : null}
      <h1>{article.title}</h1>

      <div className="flex items-center gap-8 text-sm text-neutral-600 dark:text-neutral-300 mb-4">
        <IconTag title={new Date(article.date).toLocaleDateString()}>
          <IconDate width="1em" height="1em" />
        </IconTag>
        <IconTag title={article.author}>
          <IconUser width="1em" height="1em" />
        </IconTag>
      </div>

      {(() => {
        if (!article.relatedVideoId) {
          return <div className="flex flex-col gap-6" dangerouslySetInnerHTML={{ __html: article.html }} />;
        }
        const secondH2 = article.html.indexOf('<h2>', article.html.indexOf('<h2>') + 1);
        const before = secondH2 === -1 ? article.html : article.html.slice(0, secondH2);
        const after = secondH2 === -1 ? '' : article.html.slice(secondH2);
        return (
          <>
            <div className="flex flex-col gap-6" dangerouslySetInnerHTML={{ __html: before }} />
            <div className="flex flex-col gap-3">
              <h2>Watch the Video</h2>
              <p>This article is also available as a video on my <a href="https://www.youtube.com/@nltech1" target="_blank" rel="noopener">YouTube channel</a> if you prefer that format.</p>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${article.relatedVideoId}`}
                  title="Related video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="flex flex-col gap-6" dangerouslySetInnerHTML={{ __html: after }} />
          </>
        );
      })()}

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
