import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  figma,
  threejs,
  instagram,
  linkedin,
  github,
  ybhk,
  sman,
  kmbd,
  binus,
  bgdc,
  procreate,
  unity,
  axure,
  python,
  android,
  enrichment,
  panda,
  port3d,
  ascension,
  horizons,
  hanyang,
  starpixel,
  happy5,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
  { id: "cv", title: "CV" },
];

const services = [
  {
    title: "Game Programmer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Front End Developer",
    icon: backend,
  },
  {
    title: "Artist",
    icon: creator,
  },
];

const socials = [
  {
    id: 1,
    icon: linkedin,
    url: "linkedin.com",
  },
  {
    id: 2,
    icon: instagram,
    url: "instagram.com",
  },
  {
    id: 3,
    icon: github,
    url: "github.com",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "procreate",
    icon: procreate,
  },
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "android",
    icon: android,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "axure",
    icon: axure,
  },
];

const experiences = [
  {
    title: "Head of Student Council at Damai Junior Highschool",
    company_name: "YBHK",
    icon: ybhk,
    iconBg: "#FFFFFF",
    date: "2015 - 2016",
    points: [
      "Developed strong communication skills through regular interaction with students, teachers, and school administrators.",
      "Successfully organized and coordinated school events, such as school festivals, competitions, and social gatherings.",
      "Managed and guided a team of fellow students in organizing and executing various school events and activities.",
      "Demonstrated effective leadership by serving as the Head of Student Council.",
    ],
  },
  {
    title: "Rohani Buddha Activist",
    company_name: "SMAN 19",
    icon: sman,
    iconBg: "#FFFFFF",
    date: "2018 - 2019",
    points: [
      "Organized and participated in events that fostered spiritual growth and connection among community members.",
      "Organized educational workshops or seminars on Buddhist philosophy, ethics, and meditation techniques.",
      "Managed and guided a team of fellow students in organizing and executing various Buddhist events and activities.",
    ],
  },
  {
    title: "Game Programmer and 2D Artist",
    company_name: "Binus Game Developer Club",
    icon: bgdc,
    iconBg: "#FFFFFF",
    date: "2021 - 2022",
    points: [
      "Actively participated in game jams, hackathons, or coding competitions, showcasing a commitment to continuous learning and creative problem-solving.",
      "Led a team of game programmers in conceptualizing, designing, and developing interactive and engaging video game projects.",
      "Oversaw the entire game development lifecycle, from ideation to implementation, ensuring projects were delivered on time and within scope.",
      "Produced comprehensive technical documentation to aid in the understanding and maintenance of game code. Ensured effective communication of technical concepts within the team.",
    ],
  },
  {
    title: "Internal Relation Activist",
    company_name: "Keluarga Mahasiswa Buddhis Dhammavaddhana",
    icon: kmbd,
    iconBg: "#FFFFFF",
    date: "2021 - 2022",
    points: [
      "Successfully increased attendance and participation in internal gatherings through strategic planning and engaging promotional strategies..",
      "Managed event budgets effectively, ensuring cost efficiency while delivering engaging and memorable gatherings.",
      "Successfully organized and coordinated organization events, such as festivals, and social gatherings.",
      "Conducted outreach initiatives to connect with local communities, religious organizations, and individuals to encourage participation in KMBD's Magha Puja as Staff of Public Relations",
      "Developed and implemented comprehensive fundraising strategies to secure financial support for KMBD's Asadha Puja as Head of Funding Division",
    ],
  },
  {
    title: "Division Coordinator",
    company_name: "Keluarga Mahasiswa Buddhis Dhammavaddhana",
    icon: kmbd,
    iconBg: "#FFFFFF",
    date: "2022 - 2023",
    points: [
      "Coordinated Division 3 'Secretariat, Entrepreneurship, and Internal Relation' of Keluarga Mahasiswa Buddhis Dhammavaddhana at Kemanggisan",
      "Led a team of activists to redesign existing merch into brand new high-quality products.",
      "Orchestrated the planning and execution of various gathering events, ensuring seamless coordination among Internal Relation activists for support.",
      "Collaborated with other divisions within Keluarga Mahasiswa Buddhis Dhammavaddhana to ensure integrated event planning and successful execution.",
      "Advisor for Magha Puja and Buddhist Camp",
      "Event Coordinator of Latihan Kepemimpinan Manajemen Buddhis Aktivis",
      "Project Manager for Latihan Kepemimpinan Manajemen Buddhis Calon Pengurus",
      "Head of Design and Documentation for Malam Apresiasi",
    ],
  },
  {
    title: "Student Exchange",
    company_name: "Hanyang University",
    icon: hanyang,
    iconBg: "#FFFFFF",
    date: "2024 - 2024",
    points: [
      "Bina Nusantara's representative for the student exchange program, selected from 127 out of 254 participants",
      "Bina Nusantara's only representative to Hanyang University Seoul Campus, selected from 1 out of 18 participants",
    ],
  },
  {
    title: "Unreal Engine 5 Game Developer Internship",
    company_name: "Starpixel Studio",
    icon: starpixel,
    iconBg: "#FFFFFF",
    date: "2024 - 2025",
    points: [
      "Developed a dungeon crawler, deck building game using Unreal Engine 5, contributing on every aspect of the game as project manager, and game programmer.",
      "Acquired in-depth knowledge of Unreal Engine 5's features and workflows, including blueprint scripting, materials, animation, and much more.",
    ],
  },
  {
    title: "Front End Engineer Internship",
    company_name: "Happy5",
    icon: happy5,
    iconBg: "#FFFFFF",
    date: "2024 - Now",
    points: [
      "Contributed to the development of Performance WebApp as a front-end engineer using React and JavaScript",
      "Gained hands-on experience with React and JavaScript in a collaborative team environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "The Tragic Enrichment",
    description:
      "The Tragic Enrichment is a 3D FPS Horror Game that has you exploring a basement of rooms and corridors to find the keys to escape the basement.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "VSC",
        color: "pink-text-gradient",
      },
    ],
    image: enrichment,
    source_code_link: "https://henryloo.itch.io/the-tragic-enrichment",
  },
  {
    name: "Forgotten Red Panda",
    description:
      "Forgotten Red Panda is a 2D side-scrolling adventure game that has you navigating a lost and forgotten red panda out of its former bamboo forest home. ",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "VSC",
        color: "pink-text-gradient",
      },
    ],
    image: panda,
    source_code_link: "https://bgdc.itch.io/forgotten-red-panda",
  },
  {
    name: "Horizons",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Behance",
        color: "green-text-gradient",
      },
    ],
    image: horizons,
    source_code_link: "https://www.behance.net/gallery/164237103/Horizons",
  },
  {
    name: "3js + React Portofolio Website",
    description:
      "A 3D Portofolio website made using the combination of multiple languages, mainly react and 3js.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "orange-text-gradient",
      },
      {
        name: "3js",
        color: "blue-text-gradient",
      },
    ],
    image: port3d,
    source_code_link: "https://henryloo.vercel.app/",
  },
  {
    name: "Ascension",
    description:
      "A Unreal Engine 5 Project, developed during my internship with Starpixel. Unfortunately the game itself is owned by said company, but the Game Design Document, linked in this card is owned by me, please check it out!",
    tags: [
      {
        name: "Unreal Engine",
        color: "blue-text-gradient",
      },
      {
        name: "GitLab",
        color: "green-text-gradient",
      },
    ],
    image: ascension,
    source_code_link: "https://game-design-programming-1.gitbook.io/ascension",
  },
];

export { socials, services, technologies, experiences, testimonials, projects };
