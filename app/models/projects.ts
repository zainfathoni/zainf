import homeschoolingLogo from "app/images/logos/homeschooling.svg";
import kawalcovid19Logo from "app/images/logos/kawalcovid19.webp";
import pejuangKodeLogo from "app/images/logos/pejuang-kode.svg";
import projectTransformersLogo from "app/images/logos/project-transformers.svg";
import rumahBerbagiLogo from "app/images/logos/rumah-berbagi.svg";
import wbwLogo from "app/images/logos/wbw.svg";

export const projects = [
  {
    name: "Project Transformers",
    description: "A personal AI agent fleet for managing code, finances, family logistics, and career.",
    link: {
      href: "/blog/project-transformers-building-personal-ai-army",
      label: "Blog post",
    },
    logo: projectTransformersLogo,
  },
  {
    name: "Homeschooling App",
    description: "A Rails 8.1 app for weekly homeschool planning.",
    link: {
      href: "https://github.com/zainfathoni/homeschooling",
      label: "github.com/zainfathoni/homeschooling",
    },
    logo: homeschoolingLogo,
  },
  {
    name: "Senar.ai",
    description: "An education crowdsourcing platform.",
    link: { href: "https://senar.ai", label: "senar.ai" },
    logo: pejuangKodeLogo,
  },
  {
    name: "Kelas Rumah Berbagi",
    description: "An online course platform for parents.",
    link: {
      href: "https://kelas.rumahberbagi.com",
      label: "kelas.rumahberbagi.com",
    },
    logo: rumahBerbagiLogo,
  },
  {
    name: "WargaBantuWarga",
    description:
      "A crowdsourcing website for COVID-19 medical facilities information.",
    link: {
      href: "https://wargabantuwarga.id",
      label: "wargabantuwarga.id",
    },
    logo: wbwLogo,
  },
  {
    name: "KawalCOVID19",
    description:
      "A website portal for one-stop information on COVID-19 in Indonesia.",
    link: { href: "https://kawalcovid19.id", label: "kawalcovid19.id" },
    logo: kawalcovid19Logo,
  },
];
