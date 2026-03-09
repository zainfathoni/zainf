import "@vercel/react-router";
import { handleRequest } from "@vercel/react-router/entry.server";

export default async function (
  request,
  responseStatusCode,
  responseHeaders,
  routerContext,
  loadContext,
) {
  return handleRequest(
    request,
    responseStatusCode,
    responseHeaders,
    routerContext,
    loadContext,
  );
}
