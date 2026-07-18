import amuxLogo from "app/images/logos/amux.svg";
import arkLogo from "app/images/logos/ark.svg";
import kawalcovid19Logo from "app/images/logos/kawalcovid19.webp";
import pejuangKodeLogo from "app/images/logos/pejuang-kode.svg";
import rumahBerbagiLogo from "app/images/logos/rumah-berbagi.svg";
import wbwLogo from "app/images/logos/wbw.svg";

export const projects = [
  {
    name: "The Ark",
    description:
      "A personal AI ecosystem where specialized bots work together as a team.",
    link: {
      href: "https://ark.zainf.dev",
      label: "ark.zainf.dev",
    },
    logo: arkLogo,
  },
  {
    name: "amux",
    description: "Agent-safe local lifecycle for Amp workers, runners, and tmux workspaces.",
    link: {
      href: "https://amux.zainf.dev",
      label: "amux.zainf.dev",
    },
    logo: amuxLogo,
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
