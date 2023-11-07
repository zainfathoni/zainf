import { Link } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";
import clsx from "clsx";

import { Container } from "../components/Container";
import type { Icon } from "../components/Icons";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../components/Icons";
import portraitImage from "../images/portrait.webp";
import { metadata } from "../models/metadata";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: Icon;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        to={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-600 dark:text-zinc-200 dark:hover:text-teal-400"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

const linkClassName =
  "text-teal-700 dark:text-teal-400 underline transition hover:text-teal-800 dark:hover:text-teal-300";

function ExternalLink({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
      {...props}
    >
      {children}
    </a>
  );
}

export const meta: MetaFunction = () => [
  {
    title: `About - ${metadata.title}`,
  },
  {
    name: "description",
    content: metadata.description,
  },
];

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <img
              src={portraitImage}
              alt=""
              height={300}
              width={300}
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Zain Fathoni, an Indonesian{" "}
            <span role="img" aria-label="Indonesian Flag">
              🇮🇩
            </span>{" "}
            Developer Living in Singapore{" "}
            <span role="img" aria-label="Singaporean Flag">
              🇸🇬
            </span>
            .
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hello! I am Zain. You might know me from{" "}
              <Link
                to="/talks"
                aria-label="My JSConf Asia 2019 talk"
                className={linkClassName}
              >
                my talk
              </Link>{" "}
              at{" "}
              <ExternalLink
                href="https://2019.jsconf.asia#program"
                aria-label="JSConf Asia 2019 program"
              >
                JSConf Asia 2019
              </ExternalLink>{" "}
              or my recent contribution at the{" "}
              <ExternalLink href="https://www.wargabantuwarga.com/">
                WargaBantuWarga
              </ExternalLink>{" "}
              and{" "}
              <ExternalLink
                href="https://kawalcovid19.id/tentang-kami"
                className={linkClassName}
              >
                KawalCOVID19
              </ExternalLink>{" "}
              community.
            </p>
            <p>
              I currently work as a{" "}
              <ExternalLink href="https://www.linkedin.com/in/zainfathoni/">
                Senior Software Engineer
              </ExternalLink>{" "}
              at{" "}
              <ExternalLink href="https://www.ninjavan.co/en-sg/">
                Ninja Van
              </ExternalLink>
              , previously venturing at{" "}
              <ExternalLink href="https://www.xtremax.com/">
                Xtremax
              </ExternalLink>{" "}
              and{" "}
              <ExternalLink href="https://www.bukalapak.com/">
                Bukalapak
              </ExternalLink>
              . I live in Singapore{" "}
              <span role="img" aria-label="Singaporean Flag">
                🇸🇬
              </span>{" "}
              with my Indonesian{" "}
              <span role="img" aria-label="Indonesian Flag">
                🇮🇩
              </span>{" "}
              wife 👰🏻 and three kids 👧🏻👦🏻👶🏻.
            </p>
            <p>
              To channel my enthusiasm for React, JavaScript, & frontend
              development in general, I co-organize a{" "}
              <ExternalLink href="https://reactjs.id">ReactJS </ExternalLink>{" "}
              and a{" "}
              <ExternalLink href="https://feid.dev">
                Frontend Developer community in Indonesia
              </ExternalLink>
              . I love sharing my learning journey to the community by giving{" "}
              <Link to="/talks" className={linkClassName}>
                a few talks
              </Link>{" "}
              and writing some articles in Bahasa Indonesia at{" "}
              <ExternalLink href="https://www.pejuangkode.com">
                Pejuang Kode
              </ExternalLink>{" "}
              Medium publication to help my fellow Indonesian developers learn.
            </p>
            <p>
              I have been leading the tech team of{" "}
              <ExternalLink href="https://kawalcovid19.id">
                KawalCOVID19
              </ExternalLink>{" "}
              community for the past few months to disseminate valid information
              regarding the COVID-19 pandemic in Indonesia.
            </p>
            <p>
              Recently, I also gathered a community of Indonesian learners
              around me in a{" "}
              <ExternalLink href="https://zainf.dev/discord">
                Discord Server
              </ExternalLink>
              . If you have any question for me, join us at my brand new{" "}
              <ExternalLink href="https://zainf.dev/discord">
                <strong>Pejuang Kode</strong> Discord Server
              </ExternalLink>{" "}
              and raise your questions over there! We would love to keep in
              touch with you. 😉
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul>
            <SocialLink
              href="https://twitter.com/zainfathoni/"
              icon={TwitterIcon}
            >
              Follow on Twitter/X
            </SocialLink>
            <SocialLink
              href="https://instagram.com/zain.fathoni"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/zainfathoni/"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/zainfathoni"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:me@zainf.dev"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              me@zainf.dev
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
