export type Talk = {
  date: string;
  title: string;
  description: string;
  event: string;
  resources: Array<{ href: string; label: string }>;
};

export const conferences: Talk[] = [
  {
    date: "2019-06-15",
    title: "State Machines Meet React Hooks",
    description:
      "A journey in using State Machines along with React Hooks at Ninja Van",
    event: "JSConf Asia 2019",
    resources: [
      {
        href: "https://zainf.dev/state-machines-recording",
        label: "Watch Video",
      },
      {
        href: "https://bit.ly/jsconf-asia-2019-state-machines",
        label: "Open Slides",
      },
      {
        href: "https://github.com/zainfathoni/state-machines-meet-react-hooks",
        label: "Slides Repository",
      },
      {
        href: "https://2019.jsconf.asia/#program",
        label: "Event Link",
      },
    ],
  },
];

export const meetups: Talk[] = [
  {
    date: "2019-12-05",
    title: "React Knowledgeable - Navigating i18n in SEA with Gatsby",
    description:
      "A story about managing internationalization on Ninja Van website across multiple countries in South East Asia",
    event: "React Knowledgeable",
    resources: [
      {
        href: "https://engineers.sg/video/navigating-i18n-in-sea-with-gatsby--3827",
        label: "Watch Video",
      },
      {
        href: "https://i18n-gatsby.netlify.com/",
        label: "Open Slides",
      },
      {
        href: "https://github.com/zainfathoni/i18n-gatsby",
        label: "Slides Repository",
      },
      {
        href: "https://reactknowledgeable.org/meetups/5/",
        label: "Event Link",
      },
    ],
  },
  {
    date: "2019-11-07",
    title: "Gaining Confidence in React App through Testing",
    description: "Rethinking approaches in testing React applications",
    event: "React Knowledgeable",
    resources: [
      {
        href: "https://engineers.sg/video/gaining-confidence-in-react-app-through-testing-react-knowledgeable--3755",
        label: "Watch Video",
      },
      {
        href: "https://reactknowledgeable.org/meetups/4/",
        label: "Open Slides",
      },
      {
        href: "https://github.com/zainfathoni/confident-react-testing",
        label: "Slides Repository",
      },
      {
        href: "https://reactknowledgeable.org/meetups/4/",
        label: "Event Link",
      },
    ],
  },
  {
    date: "2019-07-16",
    title: "Gaining Confidence in React App through Testing",
    description: "Rethinking approaches in testing React applications",
    event: "ReactJS Indonesia",
    resources: [
      {
        href: "https://confident-react-testing.netlify.com/",
        label: "Open Slides",
      },
      {
        href: "https://github.com/zainfathoni/confident-react-testing",
        label: "Slides Repository",
      },
      {
        href: "https://www.meetup.com/reactindonesia/events/263022521/",
        label: "Event Link",
      },
    ],
  },
  {
    date: "2017-11-01",
    title: "How Working in IT Looks Like",
    description: 'Find the "why" you should work in it',
    event: "Makers Institute",
    resources: [
      {
        href: "https://speakerdeck.com/zainfathoni/how-working-in-it-looks-like",
        label: "Open Slides",
      },
      {
        href: "https://github.com/zainfathoni/makers-institute",
        label: "Slides Repository",
      },
      {
        href: "https://www.facebook.com/photo.php?fbid=10212575629776987&set=a.4285339262978&type=3&theater",
        label: "Event Link",
      },
    ],
  },
  {
    date: "2017-10-01",
    title: "Bukalapak Bandung Journey with Go",
    description: "Bukalapak journey with Go, particularly in Bandung office.",
    event: "Facebook Developer Circles Bandung",
    resources: [
      {
        href: "https://bit.ly/bukalapak-go",
        label: "Open Slides",
      },
      {
        href: "https://github.com/zainfathoni/go-talks",
        label: "Slides Repository",
      },
      {
        href: "https://www.facebook.com/groups/DevCBandung/permalink/490681851297615/",
        label: "Event Link",
      },
    ],
  },
  {
    date: "2017-07-24",
    title: "Redux Fundamentals",
    description: "My journey in learning Redux as a backend developer",
    event: "BandungJS",
    resources: [
      {
        href: "https://redux-fundamentals.surge.sh/",
        label: "Open Slides",
      },
      {
        href: "https://github.com/zainfathoni/redux-fundamentals",
        label: "Slides Repository",
      },
      {
        href: "https://www.meetup.com/BandungJS/events/241542959/",
        label: "Event Link",
      },
    ],
  },
];
