import { redirect, type LoaderFunction } from "@vercel/remix";

export const loader: LoaderFunction = () => {
  return redirect(`/talks`);
};
