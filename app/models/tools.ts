export type Tool = {
  slug: string;
  title: string;
  href: string;
  description: string;
};

export const workstation: Tool[] = [
  {
    slug: "mbp",
    title: 'MacBook Pro 16" M3 Pro 2023 18/512GB',
    href: "https://everymac.com/systems/apple/macbook_pro/specs/macbook-pro-m3-pro-12-core-cpu-18-core-gpu-16-late-2023-specs.html",
    description:
      "I need the power of the M3 Pro chip to run my development environment smoothly and the 16-inch display size to perform my front-end works comfortably.",
  },
  {
    slug: "keychron",
    title: "Keychron K7",
    href: "https://www.kickstarter.com/projects/keytron/keychron-k7-an-ultra-slim-65-wireless-mechanical-keyboard",
    description:
      "I like the compactness and the low key travel of the keyboard. I configured it with a Low-Profile Keychron Optical Banana switch",
  },
  {
    slug: "trackpad",
    title: "Magic Trackpad Black",
    href: "https://www.apple.com/shop/product/MK2D3AM/A/magic-trackpad-black-multi-touch-surface",
    description:
      "I like macOS multi-touch gestures a lot. Therefore, once I solve my hiperheroes problem, I bought Magic Trackpad and use it everyday.",
  },
];

export const developmentTools: Tool[] = [
  {
    slug: "vs-code",
    title: "VS Code editor",
    href: "https://code.visualstudio.com",
    description:
      "I have been the heavy user of VS Code since it's first release. I configured it with Vim keybindings.",
  },
  {
    slug: "warp",
    title: "Warp terminal",
    href: "https://zainf.dev/warp",
    description:
      "I have been using Warp since 2022. It replaces iTerm2 that I had been using since I started using Mac",
  },
  {
    slug: "gitkraken",
    title: "GitKraken",
    href: "https://zainf.dev/gitkraken",
    description:
      "I found GitKraken instrumental to help me navigate repositories with many contributors. Therefore, I have also been subscribing to the GitKraken Pro plan since 2019. Sign up using my referral code to get a 50% discount.",
  },
];

export const productivity: Tool[] = [
  {
    slug: "obsidian",
    title: "Obsidian",
    href: "https://obsidian.md/",
    description:
      "I used Obsidian since February 2023 to take notes, manage my knowledge base, and write my personal journey.",
  },
  {
    slug: "arc",
    title: "Arc browser",
    href: "https://zainf.dev/arc",
    description:
      "I have been a heavy user of Arc. After exploring many other Chromium alternatives, I settled on Arc since early 2023.",
  },
];

export const finance: Tool[] = [
  {
    slug: "wise",
    title: "Wise",
    href: "https://zainf.dev/wise",
    description:
      "I use Wise to convert currencies, mainly from SGD to IDR. Sign up using my referral code to get a fee-free transfer of up to 500 GBP.",
  },
  {
    slug: "revolut",
    title: "Revolut",
    href: "https://zainf.dev/revolut",
    description:
      "I use Revolut's wallet functionality to regularly save money to achieve certain financial goals.",
  },
  {
    slug: "actual",
    title: "Actual Budget",
    href: "https://actualbudget.org/",
    description:
      "I used to be using the Wallet app from BudgetBakers. But then I turned to using Actual Budget since 2019 to track my expenses and plan my budgets. Now it's open source and I self-host it using PikaPods.",
  },
  {
    slug: "jago",
    title: "Bank Jago Syariah",
    href: "https://zainf.dev/jago-rame-rame",
    description:
      "I have been using Bank Jago Syariah since the pandemic when it was still called Jago 0%. Sign up using this link, and enter this referral code 'ZAIAF9FA' to earn Rp50.000!",
  },
  {
    slug: "tokocrypto",
    title: "Tokocrypto",
    href: "https://zainf.dev/tokocrypto",
    description:
      "I have been using Tokocrypto to purchase Bitcoin daily using their DCA feature. Sign up using this referral link to get discounts on your transaction fees.",
  },
];
