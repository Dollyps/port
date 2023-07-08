import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  Andela,
  imun,
  tribes,
  unitybank,
  jobit,
  tripguide,
  threejs,
  hotels,
  uch,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "software developer",
    company_name: "unity bank",
    icon: unitybank,
    iconBg: "#383E56",
    date: "jan 2020 - nov 2022",
    points: [
      "Wrote clear, clean code for various projects.",
      "Worked with developers to identify and remove software bugs.",
      "Delivered project reports and milestone updates to the supervisor.",
      "Assisted with testing client-server network components.",
      "Assisted with creating software programs with my team members."
    ],
  },
  {
    title: "IT Volunteer/software developer",
    company_name: "University Teaching Hospital",
    icon: uch,
    iconBg: "#383E56",
    date: "jan 2020 - nov 2022",
    points: [
      "Volunteered with groups and organizations to help make measurable differences for program recipients.",
      "Supported engaging and fun events by helping with organization and planning.",
      "Helped organize and manage events and projects.",
      "Spoke with community organizations to further drive outreach efforts and highlight program successes.",
      "Used strong interpersonal communication skills to convey information to others.",
      "Helped program leaders with administrative support duties.",
      "Developed a payroll system for Stipends for volunteers, I created the application uisng Asp.net web forms/MySql/ and Csharp."
    ],
  },

  {
    title: "Frontend Developer (Contract)",
    company_name: "Tribes",
    icon: tribes,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Hotels.ng",
    icon: hotels,
    iconBg: "#383E56",
    date: "Jan 2019 - nov 2022",
    points: [
      "Used markup languages like HTML to create user-friendly web pages.",
      "Maintain and improved website.",
      "Optimize applications for maximum speed.",
      "Write functional requirement documents and guides.",
      "Create quality mockups and prototypes.",
      "Helped back-end developers with coding and troubleshooting.",
      "Ensured high quality graphic standards and brand consistency.",
      "Design mobile-based features.",
      "Collaborate with back-end developers and web designers to improve usability."
    ],
  },
  {
    title: "Andriod Developer",
    company_name: "Andela",
    icon: Andela,
    iconBg: "#E6DEDD",
    date: "march 2016 - nov 2016",
    points: [
      "Translated designs and wireframes into high quality code.",
      "Designed build, and maintain high performance, reusable, and reusable Java code.",
      "Ensured the best possible performance, quality, and responsiveness of the application.",
      "Identified and correct bottlenecks and fix bugs.",
      "Helped maintain code quality, organization, and automatization."
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/fhavy?tab=repositories",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/fhavy?tab=repositories",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/fhavy?tab=repositories",
  },
];

export { services, technologies, experiences, testimonials, projects };
