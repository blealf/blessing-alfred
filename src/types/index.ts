interface SocialIconInterface {
  name: string;
  path: string;
  link: string;
}

interface HeroInterface {
  greeting: string;
  fullname: string;
  title: string;
  summary: string;
}

interface AboutInterface {
  summary: string[];
  skills: string[];
}

interface ExperienceInterface {
  title: string;
  company: string;
  shortCompanyName: string;
  date: string;
  responsibilities: string[];
}

interface WorkInterface {
  name: string;
  description: string;
  techs: string[];
  github: string;
  link: string;
  photos: string[];
}
