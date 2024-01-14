import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaAward,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpeg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpeg';
import Work6 from './assets/project-6.jpeg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Bhavanishankaran',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'K',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'LinkedIn : ',
    description: 'Yes',
  },
  
  {
    id: 6,
    title: 'Address : ',
    description: 'Erode',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+919025917099',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'bhavani22012003@gmail.com',
  },

  {
    id: 9,
    title: 'Github : ',
    description: 'Yes',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'Tamil, English',
  },

  

  
];

export const stats = [
  {
    id: 1,
    no: '12+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '97+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '81+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '53+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaAward />,
    year: '2022 - 2023',
    title: 'Edge Computing <span> Presentation </span>',
    desc: 'Presented a paper on "Edge Computing" and secured first prize in an Intra College Symposium.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaAward />,
    year: '2022 - 2023',
    title: 'Extended Reality <span> Presentation </span>',
    desc: 'Presented a paper on "Extented Reality" and secured second prize in an Inter College Symposium.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaAward />,
    year: '2022 - 2023',
    title: 'Curtain Coding <span> Technical </span>',
    desc: 'Particpated in a problem solving technical event and secured first prize in an Inter college Symposium',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020 - 2024',
    title: 'BE CSE <span> CGPA : 9.11 (upto 6th sem) </span>',
    desc: 'Pursuing at Velalar college of Engineering and technology, Thindal, Erode - 12.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019 - 2020',
    title: 'HSC <span> Secured : 86.8 % </span>',
    desc: 'Studied at Reliance Matric Higher Secondary School, Kuppandapalayam. ',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'SSLC <span> Secured : 92.8 % </span>',
    desc: 'Studied at Government Boys Higher Secondary School, Komarapalayam.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '75',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '60',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '60',
  },

  {
    id: 4,
    title: 'Python',
    percentage: '65',
  },

  {
    id: 5,
    title: 'Bootstrap',
    percentage: '60',
  },

  {
    id: 6,
    title: 'Java',
    percentage: '50',
  },

  {
    id: 7,
    title: 'SQL',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '65',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Problem Solving ',
    details: [
      {
        icon: <FiFileText />,
        title: 'Title : ',
        desc: 'Online Course',
      },
      {
        icon: <FiUser />,
        title: 'Date : ',
        desc: '20/04/2023',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.hackerrank.com ',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Workshops',
    details: [
      {
        icon: <FiFileText />,
        title: ' Club Name: ',
        desc: 'Pylamp',
      },
      {
        icon: <FiUser />,
        title: 'Domain : ',
        desc: 'Data Visualization',
      },
      {
        icon: <FaCode />,
        title: 'Duration : ',
        desc: 'zzzz',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Certificate Course',
    details: [
      {
        icon: <FiFileText />,
        title: 'Title : ',
        desc: 'Spoken Tutorial',
      },
      {
        icon: <FiUser />,
        title: 'Tool : ',
        desc: 'GIT',
      },
      {
        icon: <FaCode />,
        title: 'Score : ',
        desc: '53.33 %',
      },
      {
        icon: <FiExternalLink />,
        title: 'Date : ',
        desc: '05/05/2023',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Inplant Training',
    details: [
      {
        icon: <FiFileText />,
        title: ' Title: ',
        desc: 'Internship',
      },
      {
        icon: <FiUser />,
        title: 'Domain : ',
        desc: 'Web Development',
      },
      {
        icon: <FaCode />,
        title: 'Duration : ',
        desc: '08/07/22 - 15/07/22',
      },
      {
        icon: <FiExternalLink />,
        title: 'Score : ',
        desc: '90 %',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Certificate Course',
    details: [
      {
        title: 'Name : ',
        desc: 'NPTEL',
      },
      {
        title: 'Domain : ',
        desc: 'Principles of Management',
      },
      {
        title: 'Duration : ',
        desc: '12 week',
      },
      {
        title: 'Score : ',
        desc: '62 %',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Certificate Course',
    details: [
      {
        icon: <FiFileText />,
        title: 'Title : ',
        desc: 'Spoken Tutorial',
      },
      {
        icon: <FiUser />,
        title: 'Domain : ',
        desc: 'Java',
      },
      {
        icon: <FaCode />,
        title: 'Date : ',
        desc: '14/10/2021',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
