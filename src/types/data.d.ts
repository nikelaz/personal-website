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

type Skill = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  isPublic?: boolean;
  category: string;
  tags: string[];
  githubUrl: string;
  downloadPath: string;
  overview: string[];
  exampleQueries: string[];
  bestFor: string[];
  outcomes: string[];
};
