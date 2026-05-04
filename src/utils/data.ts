import github from '../assets/nav/github.svg?react';
import instagram from '../assets/nav/instagram.svg?react';
import linkedin from '../assets/nav/linkedin.svg?react';
import twitter from '../assets/nav/twitter.svg?react';

import AppleCloneImg from '../assets/work/apple-clone.png';
import Eventsdashboard1 from '../assets/work/events-dashboard1.png';
import Eventsdashboard2 from '../assets/work/events-dashboard2.png';
import FlickWeatherDesktop from '../assets/work/flick-desktop.png';
import FlickMobile1 from '../assets/work/flick-mobile1.png';
import FlickMobile2 from '../assets/work/flick-mobile2.png';
import FlickMobile3 from '../assets/work/flick-mobile3.png';
import ReactChessyImg from '../assets/work/react-chessy.png';
import sikabox1 from '../assets/work/sikabox.png';
import Web3Img from '../assets/work/web3.png';
import wetuliDesktop from '../assets/work/wetuli-desktop.png';
import wetuliMobile from '../assets/work/wetuli-mobile.png';
import wetuliWebResponsive from '../assets/work/wetuli-web-responsive.png';
import wetuliWeb from '../assets/work/wetuli-web.png';

export const socialIcons: SocialIconInterface[] = [
  { name: 'github', path: github, link: 'https://github.com/blealf' },
  { name: 'twitter', path: twitter, link: 'https://twitter.com/blealf72' },
  { name: 'linkedin', path: linkedin, link: 'https://linkedin.com/in/blealf' },
  { name: 'instagram', path: instagram, link: 'https://instagram.com' },
];

export const email = 'blealf@gmail.com';

export const hero: HeroInterface = {
  greeting: 'Hello, I’m',
  fullname: 'Blessing Alfred',
  title: 'Senior Frontend & Full-stack Engineer',
  summary: `I build high-performance, scalable, and accessible web 
  experiences with modern JavaScript frameworks, clean architecture, 
  and a strong focus on users.`,
};

export const about: AboutInterface = {
  summary: [
    `Hi, I’m Blessing Alfred — a Senior Frontend & Full-stack Engineer with several years 
    of experience building scalable, data-intensive web and mobile applications for 
    startups and growing teams across the US, EU, and Africa.`,

    `I specialize in crafting pixel-perfect, accessible, and high-performance interfaces 
    using React, Vue, TypeScript, and modern frameworks like Next.js and Nuxt. 
    I enjoy working at the intersection of product, design, and engineering to turn 
    complex requirements into elegant, user-focused solutions.`,

    `Beyond frontend work, I have hands-on experience designing APIs, real-time systems, 
    and AI-enabled features, and I actively contribute to architecture decisions, 
    performance optimization, code reviews, and mentoring. I thrive in remote-first, 
    collaborative environments and value clear communication, ownership, and continuous improvement.`,
  ],
  skills: [
    'TypeScript',
    'JavaScript (ES6+)',
    'React',
    'Next.js',
    'Vue',
    'Nuxt',
    'React Native',
    'Node.js',
    'Nest.js',
    'Ruby on Rails',
    'REST & GraphQL',
    'Tailwind CSS',
    'HTML5 & CSS3',
    'Accessibility (WCAG)',
    'Git & CI/CD',
    'Figma Collaboration',
  ],
};

export const experiences: ExperienceInterface[] = [
  {
    title: 'Senior Frontend & Mobile Engineer',
    company: "Glover (Techstars '22)",
    shortCompanyName: 'Glover',
    date: 'June 2022 - Present',
    responsibilities: [
      'Led frontend and React Native mobile development across the core B2B fintech product (web + iOS + Android).',
      'Reduced initial page load time by ~35% via code splitting, lazy loading, and tree shaking.',
      'Refactored REST/GraphQL data layer, reducing redundant API calls by ~30%.',
      'Established shared component architecture and design system.',
      'Mentored junior engineers in a cross-timezone Agile team.',
    ],
  },
  {
    title: 'Lead Full-Stack Engineer',
    company: 'WeTuli',
    shortCompanyName: 'WeTuli',
    date: 'October 2024 - November 2025',
    responsibilities: [
      'Defined architecture for real-time platform using Next.js 14, NestJS, WebSockets, React Native.',
      'Replaced polling with persistent WebSockets achieving sub-second sync.',
      'Built AI-powered features using OpenAI APIs.',
      'Shipped cross-platform mobile features.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Resoudre',
    shortCompanyName: 'Resoudre',
    date: 'May 2024 - September 2024',
    responsibilities: [
      'Built enterprise analytics platform using Vue 3, Nuxt, Tailwind CSS, SignalR.',
      'Optimised high-frequency rendering achieving 60fps dashboards.',
      'Delivered WCAG 2.1 AA compliance and performance improvements.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Patricia Technologies',
    shortCompanyName: 'Patricia',
    date: 'July 2021 - June 2022',
    responsibilities: [
      'Built fintech features using React, Next.js, TypeScript.',
      'Integrated financial APIs.',
      'Improved accessibility and cross-browser consistency.',
    ],
  },
];

export const work: WorkInterface[] = [
  {
    name: 'WeTuli',
    description: `Responsive web, mobile and desktop learning application designed to facilitate
      seamless access to educational resources and interactive learning experiences across various devices.`,
    techs: ['Next.js', 'Nest.js', 'TypeScript', 'React Native', 'Electron', 'Redux', 'AI', '...'],
    github: '',
    link: 'https://app.wetuli.com',
    photos: [wetuliWeb, wetuliDesktop, wetuliWebResponsive, wetuliMobile],
  },
  {
    name: 'SikaBox',
    description: `A reponsive and animated landing page for Sikafinancials SikaBox product.
      SikaBox is a firm that is transforming FX settlements for businesses and financial 
      institutions in Emerging Markets`,
    techs: ['Nextjs', 'TypeScript', 'React', 'GSAP', '...'],
    github: '',
    link: 'https://mysikabox.com',
    photos: [sikabox1],
  },
  {
    name: 'React Chess Game',
    description: `The Chess game displays a graphical user interface 
      with 64 squares arranged in an 8x8 grid. The game validates moves, 
      checks for check and checkmate conditions, and updates the state of the board.`,
    techs: ['JavaScript', 'React', 'HTML & CSS', 'Redux'],
    github: 'https://github.com/blealf/react-chessy',
    link: 'https://react-chessy.netlify.app',
    photos: [ReactChessyImg],
  },
  {
    name: 'Flick Weather',
    description: ` This responsive weather forecast application provides users with accurate 
      and up-to-date weather information tailored to their location. With seamless responsiveness
      across devices, from desktop to mobile, FlickWeather ensures you're always in the know.
      about the latest weather conditions.`,
    techs: ['JavaScript', 'Vue3', 'Pinia', 'HTML & CSS'],
    github: 'https://github.com/blealf/flick-weather',
    link: 'https://flick-weather.netlify.app',
    photos: [FlickWeatherDesktop, FlickMobile1, FlickMobile2, FlickMobile3],
  },
  {
    name: 'Web 3 Project',
    description: `The Web3 transfer web app allows users to transfer cryptocurrencies securely 
    on the Ethereum blockchain. Users can connect their wallets to the app. The app provides a user-friendly interface for selecting 
    the cryptocurrency, entering the amount, and specifying the recipient's wallet address.`,
    techs: ['Vue3', 'Web3', 'HTML & CSS'],
    github: 'https://github.com/blealf/project-eth',
    link: 'https://project-eth.netlify.app/',
    photos: [Web3Img],
  },
  {
    name: 'Events Dashboard',
    description: `A small events dashboard UI conversion project built with React.js. 
      The dashboard displays various event statistics using charts and graphs, 
      providing users with insights into event performance and attendance.`,
    techs: ['React', 'TypeScript', 'HTML & CSS & saas', 'Tailwind', 'Chartjs'],
    github: 'https://github.com/blealf/events-dashboard',
    link: 'https://events-dashboard-alpha.netlify.app/',
    photos: [Eventsdashboard1, Eventsdashboard2],
  },
  {
    name: 'Apple Website Clone',
    description: `A clone of the Apple landing page website built with React.js. 
      The clone features a responsive design that adapts to different screen sizes 
      and devices, ensuring a seamless user experience across platforms.`,
    techs: ['React', 'JavaScript', 'HTML & CSS'],
    github: 'https://github.com/blealf/apple-website-clone',
    link: 'https://apple-website-clone-alpha-nine.vercel.app/',
    photos: [AppleCloneImg],
  },
  {
    name: 'FF Photography',
    description: `The photography web app allows users to upload, edit, 
      and share their photos. The app stores photos securely in the cloud 
      and provides easy access to them from anywhere with an internet connection.`,
    techs: ['Ruby on Rails', 'JavaScript', 'HTML & CSS', 'Postgres', 'Materialize', 'Google cloud'],
    github: 'https://github.com/blealf/flashandflick',
    link: 'https://github.com/blealf/flashandflick',
    photos: [],
  },
  {
    name: 'Project Database',
    description: `The student project database web app allows students and instructors to manage 
      their academic projects and associated data. Instructors can create, edit, 
      and delete, search and filter projects. Students can also collaborate with instructors 
      and share project updates.`,
    techs: ['Ruby on Rails', 'JavaScript', 'HTML & CSS', 'bootstrap', 'Postgres'],
    github: 'https://github.com/blealf/ProjectSearch',
    link: 'https://github.com/blealf/ProjectSearch',
    photos: [],
  },
];
