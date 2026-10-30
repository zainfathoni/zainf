import type { ActionFunctionArgs } from "react-router";
import { amaPrivateHeaders, logoutAmaAdmin } from "~/services/ama-auth.server";

export function action({ request }: ActionFunctionArgs) {
  return logoutAmaAdmin(request);
}

export function loader() {
  return new Response("Use the sign-out button in the inbox.", {
    status: 405,
    headers: amaPrivateHeaders(),
  });
}
