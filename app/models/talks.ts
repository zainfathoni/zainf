export type Talk = {
  slug: string;
  date: string;
  title: string;
  description: string;
  event: string;
  resources: Array<{ href: string; label: string }>;
};

export const conferences: Talk[] = [
  {
    slug: "gdg-devfest-2024-yogyakarta",
    date: "2024-12-01",
    title: "Embracing #nobuild in Modern Web",
    description:
      "A deep dive on the #nobuild movement in the modern web development.",
    event: "GDG DevFest Yogyakarta 2024",
    resources: [
      {
        href: "https://zainf.dev/fest-2024-yogyakarta",
        label: "Open slides",
      },
    ],
  },
  {
    slug: "gdg-devfest-2024-semarang",
    date: "2024-11-30",
    title: "Embracing #nobuild in Modern Web",
    description:
      "A deep dive on the #nobuild movement in the modern web development.",
    event: "GDG DevFest Semarang 2024",
    resources: [
      {
        href: "https://zainf.dev/fest-2024-semarang",
        label: "Open slides",
      },
    ],
  },
  {
    slug: "bdd-2024",
    date: "2024-10-06",
    title: "Proving Rails + Hotwire as a One-Person Framework",
    description:
      "Exploring the Rails and Hotwire stack to build a full-fledged web application with simple concepts to be beared by a single person.",
    event: "Baparekraf Developer Day 2024",
    resources: [
      {
        href: "https://zainf.dev/bdd-2024",
        label: "Open slides",
      },
    ],
  },
  {
    slug: "google-io-extended-2024",
    date: "2024-05-18",
    title:
      "Building Performant Web using Remix with Public Google Sheets-Backed Database",
    description:
      "A workshop on building a performant web application using Remix with a public Google Sheets-backed database.",
    event: "Google I/O Extended 2024",
    resources: [
      {
        href: "https://zainf.dev/google-io-2024",
        label: "Open slides",
      },
    ],
  },
  {
    slug: "web-constraints",
    date: "2023-07-28",
    title: "Navigating The Web in A World Full of Constraints",
    description:
      "How I architected multiple websites using various sets of technologies to meet the objectives at hand with the given constraints at the time.",
    event: "CityJS Singapore 2023",
    resources: [
      {
        href: "https://zainf.dev/web-constraints-recording",
        label: "Watch video",
      },
      {
        href: "https://zainf.dev/web-constraints",
        label: "Open slides",
      },
    ],
  },
  {
    slug: "ddc-2023",
    date: "2023-02-11",
    title: "Menyongsong Transisi Web",
    description:
      "What I believe will be the next transition of the web. In the talk, I dug into the latest streaming features of Remix and Next.js.",
    event: "Dicoding Developer Conference 2023",
    resources: [
      {
        href: "https://zainf.dev/ddc-2023",
        label: "Open slides",
      },
    ],
  },
  {
    slug: "websight-niagahoster-2022",
    date: "2022-03-17",
    title: "Incremental SEO in WargaBantuWarga.com",
    description:
      "A deep dive on the technical aspects to improve of WargaBantuWarga.com website SEO incrementally.",
    event: "Websight by Niagahoster 2022",
    resources: [
      {
        href: "https://zainf.dev/incremental-seo-recording",
        label: "Watch video",
      },
      {
        href: "https://zainf.dev/incremental-seo",
        label: "Open slides",
      },
    ],
  },
  {
    slug: "gdg-jakarta-devfest-2021",
    date: "2021-11-28",
    title: "SEO Evolution in WargaBantuWarga.com",
    description:
      "I was one of the three speakers in the Web Day. I shared about how the we evolved the Search Engine Optimization of WargaBantuWarga.com website.",
    event: "GDG Jakarta DevFest 2021",
    resources: [
      {
        href: "https://zainf.dev/seo-wbw-video",
        label: "Watch video",
      },
      {
        href: "https://zainf.dev/seo-wbw",
        label: "Open slides",
      },
    ],
  },
  {
    slug: "jsconf-asia-2019",
    date: "2019-06-15",
    title: "State Machines Meet React Hooks",
    description:
      "A journey in using State Machines along with React Hooks at Ninja Van",
    event: "JSConf Asia 2019",
    resources: [
      {
        href: "https://zainf.dev/state-machines-recording",
        label: "Watch video",
      },
      {
        href: "https://bit.ly/jsconf-asia-2019-state-machines",
        label: "Open slides",
      },
      {
        href: "https://github.com/zainfathoni/state-machines-meet-react-hooks",
        label: "Slides repository",
      },
      {
        href: "https://2019.jsconf.asia/#program",
        label: "Event link",
      },
    ],
  },
];

export const meetups: Talk[] = [
  {
    slug: "hijra-engineering-talk-4",
    date: "2022-09-24",
    title: "Pengujian untuk Aplikasi Web yang Andal",
    description:
      "An interactive live coding session to demonstrate reliable testing for web applications.",
    event: "Hijra Engineering Talks",
    resources: [
      {
        href: "https://zainf.dev/het-4-recording",
        label: "Watch video",
      },
      {
        href: "https://zainf.dev/het-4-epic",
        label: "GitHub issue",
      },
    ],
  },
  {
    slug: "devcussion-12",
    date: "2022-07-18",
    title: "SEO Best Practices for Web Developer",
    description:
      "An interactive live coding session to demonstrate how to implement SEO best practices.",
    event: "Niagahoster Devcussion 12",
    resources: [
      {
        href: "https://zainf.dev/devcussion-12",
        label: "Watch video",
      },
      {
        href: "https://github.com/senar-ai/web/issues/5",
        label: "GitHub issue",
      },
    ],
  },
  {
    slug: "bedah-praktek-3",
    date: "2021-09-08",
    title: "Scaling Frontend Development",
    description:
      "An interactive discussion about scaling frontend development.",
    event: "Bedah Praktek Insinyur Online",
    resources: [
      {
        href: "https://zainf.dev/bedah-praktek-3",
        label: "Watch video",
      },
    ],
  },
  {
    slug: "deep-tech-indigo",
    date: "2021-02-17",
    title: "Pengantar Software Engineering",
    description: "An introduction to Software Engineering field.",
    event: "Indigo x Deep Tech Meetup",
    resources: [
      {
        href: "https://zainf.dev/deep-tech-indigo",
        label: "Watch video",
      },
      {
        href: "https://zainf.dev/pengantar-software-engineering",
        label: "Open slides",
      },
    ],
  },
  {
    slug: "deep-tech-makassar",
    date: "2020-10-09",
    title: "Pentingnya Unit Testing di Frontend",
    description:
      "A webinar about the importance of unit testing in the web frontend development.",
    event: "Deep Tech x Komunitas Programmer Makasar",
    resources: [
      {
        href: "https://zainf.dev/deep-tech-makassar",
        label: "Watch video",
      },
    ],
  },
  {
    slug: "deep-tech-talk-13",
    date: "2020-10-06",
    title: "Belajar Fundamental JavaScript melalui ReactJS",
    description:
      "A webinar about getting better in JavaScript fundamentals while using ReactJS.",
    event: "Deep Tech Talk",
    resources: [
      {
        href: "https://zainf.dev/deep-tech-talk-13-recording",
        label: "Watch video",
      },
    ],
  },
  {
    slug: "react-knowledgeable-meetup-5",
    date: "2019-12-05",
    title: "Navigating i18n in SEA with Gatsby",
    description:
      "A story about managing internationalization on Ninja Van website across multiple countries in South East Asia",
    event: "React Knowledgeable",
    resources: [
      {
        href: "https://engineers.sg/video/navigating-i18n-in-sea-with-gatsby--3827",
        label: "Watch video",
      },
      {
        href: "https://i18n-gatsby.netlify.com/",
        label: "Open slides",
      },
      {
        href: "https://github.com/zainfathoni/i18n-gatsby",
        label: "Slides repository",
      },
      {
        href: "https://reactknowledgeable.org/meetups/5/",
        label: "Event link",
      },
    ],
  },
  {
    slug: "react-knowledgeable-meetup-4",
    date: "2019-11-07",
    title: "Gaining Confidence in React App through Testing",
    description: "Rethinking approaches in testing React applications",
    event: "React Knowledgeable",
    resources: [
      {
        href: "https://engineers.sg/video/gaining-confidence-in-react-app-through-testing-react-knowledgeable--3755",
        label: "Watch video",
      },
      {
        href: "https://reactknowledgeable.org/meetups/4/",
        label: "Open slides",
      },
      {
        href: "https://github.com/zainfathoni/confident-react-testing",
        label: "Slides repository",
      },
      {
        href: "https://reactknowledgeable.org/meetups/4/",
        label: "Event link",
      },
    ],
  },
  {
    slug: "reactjs-id-meetup-1",
    date: "2019-07-16",
    title: "Gaining Confidence in React App through Testing",
    description: "Rethinking approaches in testing React applications",
    event: "ReactJS Indonesia",
    resources: [
      {
        href: "https://confident-react-testing.netlify.com/",
        label: "Open slides",
      },
      {
        href: "https://github.com/zainfathoni/confident-react-testing",
        label: "Slides repository",
      },
      {
        href: "https://www.meetup.com/reactindonesia/events/263022521/",
        label: "Event link",
      },
    ],
  },
  {
    slug: "makers-institute",
    date: "2017-11-01",
    title: "How Working in IT Looks Like",
    description: 'Find the "why" you should work in it',
    event: "Makers Institute",
    resources: [
      {
        href: "https://speakerdeck.com/zainfathoni/how-working-in-it-looks-like",
        label: "Open slides",
      },
      {
        href: "https://github.com/zainfathoni/makers-institute",
        label: "Slides repository",
      },
      {
        href: "https://www.facebook.com/photo.php?fbid=10212575629776987&set=a.4285339262978&type=3&theater",
        label: "Event link",
      },
    ],
  },
  {
    slug: "dev-c-bandung-meetup-3",
    date: "2017-10-01",
    title: "Bukalapak Bandung Journey with Go",
    description: "Bukalapak journey with Go, particularly in Bandung office.",
    event: "Facebook Developer Circles Bandung",
    resources: [
      {
        href: "https://bit.ly/bukalapak-go",
        label: "Open slides",
      },
      {
        href: "https://github.com/zainfathoni/go-talks",
        label: "Slides repository",
      },
      {
        href: "https://www.facebook.com/groups/DevCBandung/permalink/490681851297615/",
        label: "Event link",
      },
    ],
  },
  {
    slug: "bandung-js-meetup-4",
    date: "2017-07-24",
    title: "Redux Fundamentals",
    description: "My journey in learning Redux as a backend developer",
    event: "BandungJS",
    resources: [
      {
        href: "https://redux-fundamentals.surge.sh/",
        label: "Open slides",
      },
      {
        href: "https://github.com/zainfathoni/redux-fundamentals",
        label: "Slides repository",
      },
      {
        href: "https://www.meetup.com/BandungJS/events/241542959/",
        label: "Event link",
      },
    ],
  },
];

export const podcasts: Talk[] = [
  {
    slug: "codevcast-2023",
    date: "2023-08-14",
    title:
      'DevStory - "From Local to International Conferences" ft. Zain Fathoni',
    description:
      "My learning-in-public story about speaking in local meetups and international conferences.",
    event: "Codevcast",
    resources: [
      {
        href: "https://zainf.dev/codevcast-2023",
        label: "Watch video",
      },
      {
        href: "https://podcasters.spotify.com/pod/show/codevcast/episodes/DevStory---From-Local-To-International-Conferences-ft--Zain-Fathoni-e2831k5",
        label: "Listen now",
      },
    ],
  },
  {
    slug: "cerita-gagal-bareng-sigit-2021",
    date: "2021-10-18",
    title:
      "Cerita Gagal dari Zain Fathoni - Co-Maintainer ReactJS & Frontend Indonesia Community",
    description:
      "My failure stories in maintaining ReactJS and Frontend Indonesia communities.",
    event: "Cerita Gagal Bareng Sigit",
    resources: [
      {
        href: "https://podcasters.spotify.com/pod/show/cerita-gagal-bareng-sigit/episodes/Cerita-Gagal-dari-Zain-Fathoni---Co-Maintainer-ReactJS--Frontend-Indonesia-Community-e18t8k1",
        label: "Listen now",
      },
    ],
  },
  {
    slug: "muslim-hackfest-2021",
    date: "2021-02-01",
    title: "Studi Kasus Kolaborasi: KawalCOVID19",
    description:
      "A talkshow about how we built KawalCOVID19 website collaboratively in a short amount of time.",
    event: "Muslim Hackfest",
    resources: [
      {
        href: "https://zainf.dev/muslim-hackfest-2021",
        label: "Watch video",
      },
    ],
  },
  {
    slug: "agile-ambition-7",
    date: "2020-12-23",
    title: "Overcoming Coder's Block",
    description: "A discussion about various ways to overcome coder's block.",
    event: "Agile Ambition",
    resources: [
      {
        href: "https://zainf.dev/agile-ambition-7",
        label: "Watch video",
      },
    ],
  },
  {
    slug: "metro-tv-2020",
    date: "2020-10-28",
    title: "Pemuda Tekno Harapan Bangsa",
    description:
      "My first appearance on Metro TV, a national TV in Indonesia. I talked about my technological contribution in KawalCOVID19 for Indonesia during the pandemic.",
    event: "Metro TV 15 Minutes",
    resources: [
      {
        href: "https://zainf.dev/pemuda-tekno-harapan-bangsa",
        label: "Watch video",
      },
    ],
  },
  {
    slug: "pujangga-teknologi-turun-gunung-1",
    date: "2020-09-10",
    title: "Ep. 1 - Jalur Karier Ganda Bagi Software Engineer",
    description:
      "I was one of the panelists discussing about double-track career opportunities for Software Engineers.",
    event: "Pujangga Teknologi Edisi Turun Gunung",
    resources: [
      {
        href: "https://zainf.dev/pujangga-teknologi-turun-gunung-1",
        label: "Watch video",
      },
    ],
  },
  {
    slug: "ceritanya-developer-podcast-2-6",
    date: "2020-04-09",
    title: "devs[2][6] = Zain Fathoni",
    description: "How I became a developer, and what I learned in my journey.",
    event: "Ceritanya Developer Podcast",
    resources: [
      {
        href: "https://podcasters.spotify.com/pod/show/ceritanya-developer/episodes/devs26--Zain-Fathoni-ecg9ed",
        label: "Listen now",
      },
    ],
  },
];
