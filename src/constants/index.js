import {
  backend,
  creator,
  github,
  bnp,
  java,
  javascript,
  reactjs,
  git,
  python,
  tailwind,
  docker,
  ansible,
  jenkins,
  k8,
  linux,
  springboot,
  mysql,
  nodejs,
} from '../assets';
import { Facebook, Gamepad2 } from 'lucide-react';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const profileLinks = [
  {
    name: 'Github',
    icon: github,
    website: 'https://www.github.com/BlackCee333',
  },
];

const services = [
  {
    title: 'Software Engineer',
    icon: creator,
  },
  {
    title: 'Full Stack Developer',
    icon: backend,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'ELEGANCE TECH HUB',
    icon: bnp,
    iconBg: '#E6DEDD',
    date: 'Jun 2024 - Present',
    points: [
      'Built full-stack web experiences and interactive front-end features.',
      'Collaborated on product ideas, UI polish, and responsive implementations.',
    ],
  },
];

const projects = [
  {
    name: 'CLONE FACEBOOK PAGE',
    description:
      'Developed a Facebook-style web app with authentication, posts, and real-time interactions using React and Firebase.',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Firebase', color: 'green-text-gradient' },
    ],
    icon: Facebook,
  },
  {
    name: 'BLACKCEE GAMES',
    description:
      'Created a browser-based game experience using JavaScript and CSS animations.',
    tags: [
      { name: 'JavaScript', color: 'blue-text-gradient' },
      { name: 'CSS', color: 'green-text-gradient' },
    ],
    icon: Gamepad2,
  },
];

const technologies = [
  { name: 'JavaScript', icon: javascript },
  { name: 'React', icon: reactjs },
  { name: 'Git', icon: git },
  { name: 'Node.js', icon: nodejs },
];

export { services, experiences, projects, profileLinks, technologies };
