type Video = {
  id: string;
  title: string;
  summary: string;
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
  references?: Reference[];
};
