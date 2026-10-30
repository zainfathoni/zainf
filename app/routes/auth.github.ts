import type { LoaderFunctionArgs } from "react-router";
import { startAmaLogin } from "~/services/ama-auth.server";

export function loader({ request }: LoaderFunctionArgs) {
  return startAmaLogin(request);
}
