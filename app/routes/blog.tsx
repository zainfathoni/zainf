import { Outlet } from "@remix-run/react";
import { Container } from "~/components/Container";
import { Prose } from "~/components/Prose";

export default function Component() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Prose>
            <Outlet />
          </Prose>
        </div>
      </div>
    </Container>
  );
}
