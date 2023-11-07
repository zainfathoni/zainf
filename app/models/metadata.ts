import data from "../data/metadata.json";

export type Metadata = {
  title: string;
  description: string;
  url: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  locale: string;
};

export const metadata = data as Metadata;
