import { Outlet } from "@remix-run/react";
import { Prose } from "~/components/Prose";

export default function Component() {
  return (
    <Prose>
      <Outlet />
    </Prose>
  );
}
