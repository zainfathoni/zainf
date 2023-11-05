export type MdxAttributes = { meta: Array<Record<string, any>> };

export type MdxModule = {
  filename: string;
  attributes: MdxAttributes;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
};
