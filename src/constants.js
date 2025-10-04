// Skills Section Logos
import airtableLogo from "./assets/techLogo/airtable.png";
import cssLogo from "./assets/techLogo/css.png";
import expressLogo from "./assets/techLogo/express.png";
import firebaseLogo from "./assets/techLogo/firebase.png";
import gitLogo from "./assets/techLogo/git.png";
import githubLogo from "./assets/techLogo/github.png";
import graphqlLogo from "./assets/techLogo/graphql.png";
import htmlLogo from "./assets/techLogo/html.png";
import javascriptLogo from "./assets/techLogo/javascript.png";
import materialuiLogo from "./assets/techLogo/materialui.png";
import mongodbLogo from "./assets/techLogo/mongodb.png";
import nextjsLogo from "./assets/techLogo/nextjs.png";
import nodejsLogo from "./assets/techLogo/nodejs.png";
import postmanLogo from "./assets/techLogo/postman.png";
import pythonLogo from "./assets/techLogo/python.png";
import reactjsLogo from "./assets/techLogo/reactjs.png";
import reactqueryLogo from "./assets/techLogo/reactquery.png";
import reduxLogo from "./assets/techLogo/redux.png";
import socketLogo from "./assets/techLogo/socket.png";
import tailwindcssLogo from "./assets/techLogo/tailwindcss.png";
import typescriptLogo from "./assets/techLogo/typescript.png";
import vscodeLogo from "./assets/techLogo/vscode.png";

// Experience Section Logos
import ajackusLogo from './assets/companyLogo/ajackusLogo.png';
import crownstackLogo from './assets/companyLogo/crownstackLogo.png';
import cutedgetechLogo from './assets/companyLogo/cutedgetechLogo.png';
import psiborgLogo from './assets/companyLogo/psiborgLogo.png';

// Education Section Logo's
import glaLogo from "./assets/educationLogo/gla_logo.png";
import bsaLogo from "./assets/educationLogo/bsa_logo.png";
import vpsLogo from "./assets/educationLogo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/workLogo/github_det.png";
import csprepLogo from "./assets/workLogo/cs_prep.png";
import movierecLogo from "./assets/workLogo/movie_rec.png";
import taskremLogo from "./assets/workLogo/task_rem.png";
import npmLogo from "./assets/workLogo/npm.png";
import webverLogo from "./assets/workLogo/web_dig.png";
import cmLogo from "./assets/workLogo/cm.png";
import imagesearchLogo from "./assets/workLogo/image_search.png";
import removebgLogo from "./assets/workLogo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "React Native", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "React Query", logo: reactqueryLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "GraphQL", logo: graphqlLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Airtable", logo: airtableLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Socket.io", logo: socketLogo },
      ],
  },
];

export const ExperienceInfo = [
  {
    id: 1,
    img: ajackusLogo,
    role: "Associate Software Developer",
    company: "Ajackus",
    date: "November 2023 - Present",
    desc: "As a software developer, built web and mobile applications using React.js and React Native, integrated APIs with React Query, and worked on Airtable and Next.js projects, leveraging various AI tools to improve efficiency and deliver scalable, modern solutions.",
    skills: ["React JS", "React Native", "React Query", "Javascript", "Airtable", "NextJS"],
  },
  {
    id: 2,
    img: psiborgLogo,
    role: "React Native Developer",
    company: "Psiborg Technologies Pvt. Ltd.",
    date: "September 2023 - October 2023",
    desc: "As a React Native developer, contributed to building IoT-enabled mobile applications by integrating sensor data, enabling real-time insights and enhancing functionality for connected devices.",
    skills: ["React Native", "IoT"],
  },
  {
    id: 3,
    img: cutedgetechLogo,
    role: "React Native Developer",
    company: "Cut Edge Technology",
    date: "January 2023 - September 2023",
    desc: "As a React Native developer, worked on diverse projects implementing complex features like chat functionality, multilingual support, theme switching, and payment gateways, enhancing usability and delivering seamless, user-centric mobile experiences.",
    skills: ["React Native", "Redux", "Socket.io", "Payment Gateways"],
  },
  {
    id: 4,
    img: crownstackLogo,
    role: "React Native Intern & Developer",
    company: "Crownstack Technologies",
    date: "October 2021 - December 2022",
    desc: "Started as a React Native intern and grew into a developer, creating scalable UI components from Figma designs and collaborating with the team to deliver smooth, user-friendly mobile applications that enhanced overall product experience.",
    skills: ["HTML", "CSS", "Tailwind CSS", "Javascript", "React Native", "Redux", "Figma"],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "GLA University, Mathura",
    date: "Sept 2022 - July 2024",
    grade: "7.81 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "BSA College, Mathura",
    date: "Sept 2018 - Aug 2021",
    grade: "73.2%",
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Vatsalya Public School Govardhan, Mathura",
    date: "Apr 2017 - March 2018",
    grade: "78%",
    desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "Vatsalya Public School Govardhan, Mathura",
    date: "Apr 2015 - March 2016",
    grade: "87.5%",
    desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "CS Prep",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Task Reminder Chrome Extension Tool",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/codingmastr/Task-Reminder-Tool",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Webverse Digital",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
  },
  {
    id: 6,
    title: "Coding Master",
    description:
      "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    image: cmLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    github: "https://codingmasterweb.in/",
    webapp: "https://codingmasterweb.in/",
  },
  {
    id: 7,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Search-App",
    webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 8,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Background-Remover",
    webapp: "https://removeyourbg.netlify.app/",
  },
];
