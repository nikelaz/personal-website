type Video = {
  id: string;
  title: string;
  summary: string;
  date?: string;
  duration?: string;
  tags?: string[];
};

type Reference = {
  author?: string;
  year?: string;
  title?: string;
  source?: string;
  url?: string;
}

type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  html: string;
  tags: string[];
  author: string;
  references?: Reference[];
  ogImage?: string;
  relatedVideoId?: string;
};

type ProjectCategory =
  | "Native"
  | "Linux"
  | "Systems"
  | "Rust"
  | "C++"
  | "Graphics"
  | "Libraries"
  | "Developer Tools"
  | "Distributed Systems"
  | "AI Infrastructure"
  | "PHP";

type ProjectScreenshot = {
  src: string;
  alt: string;
};

type ProjectSection = {
  heading: string;
  body: string[];
};

type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  categories: ProjectCategory[];
  technologies: string[];
  repositoryUrl: string;
  homepageUrl?: string;
  downloadUrl?: string;
  heroImage: ProjectScreenshot;
  screenshots: ProjectScreenshot[];
  featured: boolean;
  story: string;
  sections?: ProjectSection[];
  relatedArticles?: string[];
  relatedVideos?: string[];
  ogImage?: string;
};