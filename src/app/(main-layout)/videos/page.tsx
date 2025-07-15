import type { Metadata } from "next";
import VideosView from "@/components/videos-view";
import videos from "@/data/videos";

export const metadata: Metadata = {
  title: "Videos - Nikola Lazarov",
  description: "Watch educational programming videos by Nikola Lazarov covering web development, JavaScript, TypeScript, React, and software engineering best practices. Learn through practical tutorials.",
  openGraph: {
    title: "Videos - Nikola Lazarov",
    description: "Watch educational programming videos by Nikola Lazarov covering web development, JavaScript, TypeScript, React, and software engineering best practices. Learn through practical tutorials.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Videos - Nikola Lazarov",
    description: "Watch educational programming videos by Nikola Lazarov covering web development, JavaScript, TypeScript, React, and software engineering best practices. Learn through practical tutorials.",
    creator: "@nikelaz",
  },
};

const Videos = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoGallery",
    "name": "Programming Videos by Nikola Lazarov",
    "description": "Educational programming videos covering web development, JavaScript, TypeScript, React, and software engineering best practices.",
    "author": {
      "@type": "Person",
      "name": "Nikola Lazarov",
      "url": "https://nikolalazarov.com"
    },
    "video": videos.slice(0, 12).map(video => ({
      "@type": "VideoObject",
      "name": video.title,
      "description": video.summary,
      "thumbnailUrl": `https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
      "contentUrl": `https://youtu.be/${video.id}`,
      "embedUrl": `https://www.youtube.com/embed/${video.id}`,
      "uploadDate": video.date,
      "duration": video.duration,
      "keywords": video.tags
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <VideosView
        videos={videos}
        page={1}
      />
    </>
  );
};

export default Videos;
