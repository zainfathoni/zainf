import { redirect, type LoaderFunction } from "react-router";
import { conferences, meetups, podcasts } from "~/models/talks";

export const loader: LoaderFunction = ({ params }) => {
  const { slug } = params;
  const talk = [...conferences, ...meetups, ...podcasts].find((t) => t.slug === slug);
  if (talk?.slug) {
    return redirect(`/talks#${talk?.slug}`);
  } else {
    return redirect(`/talks`);
  }
};
