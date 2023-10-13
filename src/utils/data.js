import github from "../assets/nav/github.svg";
import twitter from "../assets/nav/twitter.svg";
import linkedin from "../assets/nav/linkedin.svg";
import instagram from "../assets/nav/instagram.svg";

export const socialIcons = [
  { name: 'github', path: github, link: 'https://github.com/' },
  { name: 'twitter', path: twitter, link: 'https://twitter.com/' },
  { name: 'linkedin', path: linkedin, link: 'https://linkedin.com/' },
  { name: 'instagram', path: instagram, link: 'https://instagram.com' }
]

export const email = 'blealf@gmail.com'

export const hero = {
  greeting: 'Hi, my name is',
  fullname: 'Blessing Alfred',
  title: 'I am a frontend developer',
  summary: `A frontend developer with a passion for creating engaging 
      and user-friendly digital experiences.`
  // summary: `I'm a frontend developer with a passion for creating engaging 
  //     and user-friendly digital experiences. I deliver high-quality products
  //     that exceed user expectations using the latest web technologies. 
  //     Currently, I’m focused on building accessible, human-centred products at Glover.`
}

export const about = {
  summary: [
      `Hi, my name is Blessing Alfred. As a frontend developer, 
      I am passionate about creating engaging and user-friendly digital experiences. 
      With experience in building and designing web applications, 
      I specialize in creating accessible, human-centered products that cater to the 
      needs of all users.`,

      `In my career, I have collaborated with designers, project managers,
      and other developers to deliver high-quality products that meet
      client requirements and exceed user expectations. As a self-motivated learner, 
      I am committed to staying up to date with the latest web development trends
      and technologies to continuously improve my skills and deliver cutting-edge products.`,

      `I am proficient in a range of programming languages and tools:`
    ],
    skills: [
        'JavaScript',
        'HTML & CSS',
        'Vue',
        'Git',
        'Figma',
        'Typescript',
        'React',
        // 'Ruby on Rails'
    ]
}
export const experiences = [
  {
    title: 'Front-end Engineer',
    company: "Glover (Techstars '22)",
    shortCompanyName: 'Glover',
    date: 'June 2022 - Present',
    responsibilities: [
      'Collaborating with designers, developers, and other stakeholders to ensure effective and efficient implementation of user interface designs.',
      'Building responsive and cross- browser compatible websites that can be accessed on different devices and platforms.',
      'Implementing best practices for web development, such as optimizing code for performance, accessibility, and search engine optimization(SEO).',
      'Creating and maintaining reusable code libraries and templates to improve productivity and consistency across projects.',
      'Participating in code reviews, sprint planning, and other team activities to ensure quality and timely delivery of projects.',
    ]
  },
  {
    title: 'Front-end Engineer',
    company: "Patricia Technologies",
    shortCompanyName: 'Patricia',
    date: 'July 2021 - May 2022',
    responsibilities: [
      'Pixel perfect conversion of well - curated UI designs with HTML, CSS and JavaScript',
      'Conversion of well - curated UI designs to usable web applications.',
      'Integrating of backend API with the converted UI.',
      'Worked with the integration of third- party APIs for improved user engagement.',
      'Collaborated with other developers to deliver web applications with well - written code.',
      'Worked on several projects including customer - facing and in -house web applications.',
    ]
  },
  {
    title: 'Front-end Intern',
    company: "DJ Agency",
    shortCompanyName: 'DJ Agency',
    date: 'June 2020 - July 2020',
    responsibilities: [
      'Engaged in the development of a web 3D-modelling and animation software using React',
      'Workflow included the use of a version control system for development.',
      'Completed tickets promptly.',
      'Contributed to design decisions.',
    ]
  },
  {
    title: 'Research Assistant',
    company: "De Montfort University",
    shortCompanyName: "De Montfort University",
    date: 'June 2016 - December 2016',
    responsibilities: [
      'Project: Time series analysis of spatial data using artificial neural networks.',
      'Researched models to predict vegetation cover of an area in Leicester, England, UK.',
      'Data preparation, sampling, loading and processing using MATLAB and Python.',
    ]
  }
]

export const work = [
  {
    name: "React Chess Game",
    description: `The Chess game displays a graphical user interface 
      with 64 squares arranged in an 8x8 grid. The game validates moves, 
      checks for check and checkmate conditions, and updates the state of the board.`,
    techs: ['JavaScript','React','HTML & CSS'],
    github: 'https://github.com/blealf/react-chess',
    link: 'https://github.com/blealf/react-chess'
  },
  {
    name: "FF Photography",
    description: `The photography web app allows users to upload, edit, 
      and share their photos. The app stores photos securely in the cloud 
      and provides easy access to them from anywhere with an internet connection.`,
    techs: ['Ruby on Rails','JavaScript','HTML & CSS', 'Postgres', 'Materialize', 'Google cloud'],
    github: 'https://github.com/blealf/flashandflick',
    link: 'https://github.com/blealf/flashandflick'
  },
  {
    name: "Web 3 Project",
    description: `The Web3 transfer web app allows users to transfer cryptocurrencies securely 
      on the Ethereum blockchain. Users can connect their wallets to the app. The app provides a user-friendly interface for selecting 
      the cryptocurrency, entering the amount, and specifying the recipient's wallet address.`,
    techs: ['Vue','Web3','HTML & CSS',],
    github: 'https://github.com/blealf/project-eth',
    link: 'https://project-eth.netlify.app/'
  },
  {
    name: "Project Database",
    description: `The student project database web app allows students and instructors to manage 
      their academic projects and associated data. Instructors can create, edit, 
      and delete, search and filter projects. Students can also collaborate with instructors 
      and share project updates.`,
    techs: ['Ruby on Rails','JavaScript','HTML & CSS', 'bootstrap', 'Postgres'],
    github: 'https://github.com/blealf/ProjectSearch',
    link: 'https://github.com/blealf/ProjectSearch'
  }
]