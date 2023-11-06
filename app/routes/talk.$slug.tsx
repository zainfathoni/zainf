import { redirect, type LoaderFunction } from "@vercel/remix";
import { conferences, meetups } from "~/models/talks";

export const loader: LoaderFunction = ({ params }) => {
  const { slug } = params;
  const talk = [...conferences, ...meetups].find((t) => t.slug === slug);
  if (talk?.slug) {
    return redirect(`/talks#${talk?.slug}`);
  } else {
    return redirect(`/talks`);
  }
};
