export type Tool = {
  title: string;
  href: string;
  description: string;
};

export const workstation: Tool[] = [
  {
    title: 'MacBook Pro 13" M1 2020 16/256GB',
    href: "https://everymac.com/systems/apple/macbook_pro/specs/macbook-pro-m1-8-core-13-2020-specs.html",
    description: "Workstation laptop provided by Ninja Van.",
  },
  {
    title: "Keychron K7",
    href: "https://www.kickstarter.com/projects/keytron/keychron-k7-an-ultra-slim-65-wireless-mechanical-keyboard",
    description:
      "I like the compactness and the low key travel of the keyboard. I configured it with a Low-Profile Keychron Optical Banana switch",
  },
  {
    title: "Magic Trackpad Black",
    href: "https://www.apple.com/shop/product/MK2D3AM/A/magic-trackpad-black-multi-touch-surface",
    description:
      "I like macOS multi-touch gestures a lot. Therefore, once I solve my hiperheroes problem, I bought Magic Trackpad and use it everyday.",
  },
];

export const developmentTools: Tool[] = [
  {
    title: "VS Code editor",
    href: "https://code.visualstudio.com",
    description:
      "I have been the heavy user of VS Code since it's first release. I configured it with Vim keybindings.",
  },
  {
    title: "Warp terminal",
    href: "https://zainf.dev/warp",
    description:
      "I have been using Warp since 2022. It replaces iTerm2 that I had been using since I started using Mac",
  },
];

export const productivity: Tool[] = [
  {
    title: "Arc browser",
    href: "https://arc.net/gift/85b48156",
    description:
      "I have been a heavy user of Arc. After exploring many other Chromium alternatives, I settled on Arc since early 2023.",
  },
  {
    title: "Raycast",
    href: "https://www.raycast.com/",
    description:
      "I use Raycast to replace Apple's Spotlight since it provides more features with its rich plugins ecosystem.",
  },
];

export const finance: Tool[] = [
  {
    title: "Wise",
    href: "https://zainf.dev/wise",
    description:
      "I use Wise to convert currencies, mainly from SGD to IDR. Sign up using my referral code to get a fee-free transfer of up to 500 GBP.",
  },
  {
    title: "Revolut",
    href: "https://zainf.dev/revolut",
    description:
      "I use Revolut's wallet functionality to regularly save money to achieve certain financial goals.",
  },
  {
    title: "Actual Budget",
    href: "https://actualbudget.com/",
    description:
      "I used to be using the Wallet app from BudgetBakers. But then I turned to using Actual Budget since 2019 to track my expenses and plan my budgets.",
  },
];
