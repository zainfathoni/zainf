import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import styles from "highlight.js/styles/night-owl.css";
import { Container } from "~/components/Container";
import { Prose } from "~/components/Prose";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

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
