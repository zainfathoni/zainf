import * as reactDomJsx from "../content/articles/react-dom-jsx.mdx";

export type ArticleAttributes = {
  slug: string;
  attributes: {
    meta: {
      author: string;
      description: string;
      date: string;
      title: string;
    };
  };
};

function articleFromModule(module: {
  filename: string;
  attributes: {
    meta: {
      title: string;
      author: string;
      description: string;
      date: string;
    };
  };
}): ArticleAttributes {
  return {
    slug: module.filename.replace(/\.mdx?$/, ""),
    ...module,
  };
}

export const getAllArticles = () => {
  const articles = [reactDomJsx];
  return articles.map(articleFromModule);
};

export const getArticleBySlug = (slug?: string) => {
  const articles = getAllArticles();
  return articles.find((article) => article.slug === slug);
};
