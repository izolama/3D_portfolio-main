import {
  meta,
  shopify,
  starbucks,
  tesla,
  atr,
  jaki,
  parkour,
} from '../assets/images';
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  flutter,
  java,
  kotlin,
  mdd,
  ahm,
  dolan,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: flutter,
    name: 'Flutter',
    type: 'Mobile Developer',
  },
  {
    imageUrl: kotlin,
    name: 'Flutter',
    type: 'Mobile Developer',
  },
  {
    imageUrl: java,
    name: 'Flutter',
    type: 'Mobile Developer',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
];

export const experiences = [
  {
    title: 'Flutter Developer',
    company_name: 'Multidaya Dinamika',
    icon: mdd,
    iconBg: '#accbe1',
    date: 'March 2022 - Present',
    points: [
      'Developing and maintaining mobile and web applications using Flutter and Dart.',
      'Collaborating with cross-functional teams including designers, product managers, and backend developers to deliver seamless user experiences.',
      'Ensuring application performance, responsiveness, and cross-platform compatibility for Android, iOS, and web.',
      'Participating in code reviews, optimizing existing codebases, and mentoring junior developers.',
      'Integrating RESTful APIs, managing state using GetX/Provider, Bloc, and implementing advanced UI/UX designs.',
    ],
  },
  {
    title: 'Sharepoint Developer',
    company_name: 'PT. Astra Honda Motor',
    icon: ahm,
    iconBg: '#fbc3bc',
    date: 'Mar 2022 - Agu 2022',
    points: [
      'Managing the migration of SharePoint environments from 2010 to 2019, ensuring data integrity and system stability.',
      'Customizing SharePoint workflows, lists, and libraries to align with business requirements.',
      'Collaborating with IT teams to troubleshoot and resolve migration-related issues.',
      'Optimizing SharePoint sites for performance and usability while ensuring compatibility with modern browsers.',
      'Providing documentation and training to users on new SharePoint 2019 features and functionality.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Ministry ATR/BPN',
    icon: atr,
    iconBg: '#b7e4c7',
    date: 'Okt 2021 - Dec 2021',
    points: [
      'Migrating internal ministry websites from PHP to TypeScript and Angular, improving maintainability and scalability.',
      'Developing reusable components and modules to streamline the development process and ensure consistency across applications.',
      'Collaborating with cross-functional teams to ensure seamless integration of back-end services and front-end interfaces.',
      'Optimizing website performance and implementing responsive designs for various devices and browsers.',
      'Providing technical documentation and conducting knowledge transfer sessions for team members on the Angular framework.',
    ],
  },
  {
    title: 'Mobile Developer',
    company_name: 'Startup Jaki',
    icon: jaki,
    iconBg: '#a2d2ff',
    date: 'Dec 2018 - Sep 2020',
    points: [
      'Developing mobile applications using App Inventor to create innovative solutions, including a pedometer application.',
      'Designing and implementing intuitive user interfaces to enhance user experience and engagement.',
      'Collaborating with cross-functional teams to gather requirements and deliver functional mobile solutions.',
      'Optimizing application performance and ensuring compatibility across different mobile devices.',
      'Providing documentation and support for the deployment and maintenance of mobile applications.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/izolama',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/faizol-ama-955a13195',
  },
];

export const projects = [
  {
    iconUrl: dolan,
    theme: 'btn-back-red',
    name: 'Self Service Top-Up',
    description:
      'This app facilitates balance top-ups for visitors at tourist destinations, allowing them to independently recharge their balance on-site.',
    link: 'https://www.youtube.com/watch?v=DwFn_wJe_uE&t=51s',
    videoUrl: 'DwFn_wJe_uE', // Include a valid URL for the video
  },
  {
    iconUrl: parkour,
    theme: 'btn-back-yellow',
    name: 'EDC Parking',
    description:
      'This app also supports offline mode, on-road, off-road, and valet modes, and has been widely accepted in parking facilities.',
    link: 'https://www.youtube.com/shorts/Tb6LB83X5p8',
    videoUrl: 'Tb6LB83X5p8', // Include a valid URL for the video
  },
  {
    iconUrl: dolan,
    theme: 'btn-back-blue',
    name: 'POS (Point Of Sale)',
    description:
      'It provides a modern POS solution integrated with devices dekstop , tablet and EDC terminals, offering flexibility in managing transactions and enhancing the user experience.',
    link: 'https://www.youtube.com/watch?v=sjBtvpdC-O8&t=7s',
    videoUrl: 'sjBtvpdC-O8', // Include a valid URL for the video
  },
  {
    iconUrl: dolan,
    theme: 'btn-back-pink',
    name: 'Edc Redeem Ticket',
    description:
      'It is commonly used at sporting events such as basketball games and tourist attractions, supporting PDT devices and ticket scanning capabilities.',
    link: 'https://www.youtube.com/shorts/2j5ieM6Jua4',
    videoUrl: '2j5ieM6Jua4', // Include a valid URL for the video
  },
];
