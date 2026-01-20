import {
  mobile,
  backend,
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
  carrent,
  jobit,
  inkSync,
  tracker,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  nextauth,
  socialSphere,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Programmer",
    icon: backend,
  },
  // {
  //   title: "Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JWT",
    icon: jwt,
  },
  // {
  //   name: "NextAuth",
  //   icon: nextauth,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const projects = [ 
  { name: "SheenEdge", 
    description: "A real-time collaborative code editor with syntax highlighting and multi-language support.", 
    features: [ "Users can create a room and invite others to join the room using a unique room code.",
      "Users can code and the changes will be reflected in real-time to all the users in the room.",
    ],
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
    ],
    image: inkSync,
    //source_code_link: "https://github.com/himanshu8443/InkSync",
    //live_link: "https://www.inksync.cloud/",
  },
  {
    name: "AI Leads Generator",
    description: "A smart Chrome extension that analyzes LinkedIn profiles, scores leads using ICP rules, and generates personalized outreach messages using AI.",
    features: [ "Chrome extension for real-time LinkedIn profile analysis.", 
      "Profile scraping directly from LinkedIn public profile pages.", 
      "AI-powered lead summary and personalized outreach message generation (Gemini API).",
      "Custom ICP (Ideal Customer Profile) configuration with target and exclusion keywords.", 
      "Rule-based lead scoring system with clear ICP match reasoning.", 
      "One-click lead saving with local storage backup.", 
      "Automatic export of leads to Google Sheets as a lightweight CRM.",
      "Fallback rule-based analysis when AI or APIs are unavailable.", 
      "Secure handling of API keys and credentials using environment variables.",
    ],
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
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "nextauth",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    //source_code_link: "https://github.com/himanshu8443/hayasaka",
    //live_link: "https://hayasaka.live/",
  },
  {
    name: "AI - Nyaya",
    description: "Developed an educational technology website with CMS.",
    features: [
      "Implemented Email verification and using OTP user authentication and login/signup functionality using JWT for secure access to the platform.",
      "Students can browse and purchase courses. Instructors can create new courses, edit existing courses, and delete courses they have created.",
      "Integrated MongoDB database to store user information, course data, and progress tracking.",
      "Employed RESTful API principles for seamless communication between the frontend and backend systems.",
      "Razorpay payment integration.",
      "PWA (Progressive Web App) support.",
    ],
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
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    //source_code_link: "https://github.com/himanshu8443/Study-Notion-master",
    //live_link: "https://studynotion-master.vercel.app/",
  },
  {
    name: "Jal - a- Sandhana",
    description:
      "A ML based chatbot that helps to coallate and dissiminate the ground water level information",
    features: [
      "Jal -a -Sandhana is a ML based chatbot made for the coallation and dissiminationof the information of the Ground Water level.",
      "SIH Finalist Project (I was runner up with this project in Smart India Hackathon)",
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Chrome Extension",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "pink-text-gradient",
      },
    ],
    image: tracker,
    //source_code_link: "https://github.com/himanshu8443/FlipKart-Price-Tracker",
    //live_link:"https://chromewebstore.google.com/detail/fliptrack-flipkart-price/pekpfcghlbljghaojdlajgpceebobokd?hl=en",
  },
  {
    name: "Vallox Cube",
    description:
      "An ML Based hand gesture controlled Vallox art ",
    features: [
      //"User authentication using JWT and OAuth providers.",
      //"Infinite scroll for posts.",
      //"Image and video uploads.",
      //"Like, comment, and share posts.",
      //"Follow and unfollow users.",
      //"Dark mode support.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: socialSphere,
    //source_code_link: "https://github.com/himanshu8443/SocialSphere",
    //live_link: "https://socialspherex.vercel.app/",
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

export {
  services,
  technologies,
  //  experiences,
  //  testimonials,
  projects,
};