import data from "../data/metadata.json";

export type Metadata = {
  title: string;
  description: string;
};

export const metadata = data as Metadata;
