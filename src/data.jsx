import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/Calculator.jpg';
import Work2 from './assets/Countries.jpg';
import Work3 from './assets/Dashboard-main.jpg';
import Work4 from './assets/Loading.gif';



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
    description: 'Mohammed',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Burhan',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '23 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Address : ',
    description: 'Chennai',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '+91-9092955315',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'smdburhan25@gmail.com',
  },

 
  {
    id: 8,
    title: 'Languages : ',
    description: 'Tamil, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2',
    title:'Completed <br /> Projects',
  },
  {
    id: 2,
    no: '1+',
    title: ' Awards <br /> Won',
  },{
    id:3,
    no:"2",
    title:'Certification <br/>Business English Certificate, <br/> GATE'
  }
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'July -2022 - January -2023',
    title: 'Assistant Client Partner <span>-Access Health Care Inc </span>',
    desc: 'Responsible for making calls to insurance companies to follow-up on pending claim.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'July-2021 - October-2021',
    title: 'Executive AR caller <span>-InfoSearch Pvt.Ltd. </span>',
    desc: 'Responsible for making calls to insurance companies to follow-up on pending claim.',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017 -2021',
    title: 'Undergraduate<span>-Anna University </span>',
    desc: 'S.A Engineering College An Autonomous Institution Affiliated To Anna University Chennai. Bachelor Of Engineering Under Graduated In Mechanical Engineering Cgpa-7.962',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'Higher Secondary Certificate<span>-VMHS School</span>',
    desc: '81%',
  },
   {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Secondary School Certificate<span>-VMHS School</span>',
    desc: '89%',
   }
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '80',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '75',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'React',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Mongo-Db',
    percentage: '70',
  },

  {
    id: 6,
    title: 'Node',
    percentage: '68',
  },

  {
    id: 7,
    title: 'Photo Editing',
    percentage: '65',
  },

  {
    id: 8,
    title: 'Figma',
    percentage: '45',
  },
];
export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Calculator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Git-Hub : ',
        desc:'<a href=https://github.com/thedevBurhan/calculator target=blank>Code</a>',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'DOM',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href=https://calculator-with-dom.netlify.app/ target=blank>Web address</a>',
      },
    ],
  },

  {
    id: 2,
    img: Work3,
    title: 'Dashboard',
    details: [
      {
        icon: <FiFileText />,
        title: 'Front-end: ',
        desc: '<a href=https://github.com/thedevBurhan/Node_Mentor_Student_DashBoard-FrontEnd target=blank>Source code</a>',
      },
      {
        icon: <FiExternalLink />,
        title: 'Back-End: ',
        desc: '<a href=https://github.com/thedevBurhan/Node_Mentor_Student-Backend target=blank>Source code</a>',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React.js, Node.js, Mongo-DB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href=https://node-frontend-dasshboard.netlify.app/ target=blank>Wed address</a>',
      },
    ],
  },

  {
    id: 3,
    img: Work2,
    title: 'Rest Countries',
    details: [
      {
        icon: <FiFileText />,
        title: 'Git-Hub : ',
        desc: '<a href=https://github.com/thedevBurhan/Rest-Countries- target=blank>Source code</a>',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS (fetch method)',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href=https://countries-flag-api.netlify.app/ target=blank>Web Address</a>',
      },
    ],
   
  },

  {
    id: 4,
    img: Work4,
    title: 'On Progess',
    details: [
      {
        icon: <FiFileText />,
        title: 'Git-Hub : ',
        desc: '...',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: '....',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '....',
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
