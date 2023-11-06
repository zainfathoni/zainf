import { Outlet } from "@remix-run/react";
import { Container } from "~/components/Container";

export default function Layout() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Outlet />
        </div>
      </div>
    </Container>
  );
}
