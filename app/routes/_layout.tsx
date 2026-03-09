import { Outlet } from "react-router";
import { Container } from "~/components/Container";

export default function Component() {
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
