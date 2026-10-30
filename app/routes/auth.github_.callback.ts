import type { LoaderFunctionArgs } from "react-router";
import { finishAmaLogin } from "~/services/ama-auth.server";

// A sibling resource route: do not run the login-start loader on callbacks.
export function loader({ request }: LoaderFunctionArgs) {
  return finishAmaLogin(request);
}
