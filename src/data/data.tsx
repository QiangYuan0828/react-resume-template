import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Qiang Yuan\'s Homepage',
  description: "Qiang Yuan's personal website to introduce himself",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Qiang Yuan.`,
  description: (
    <>
<p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
  I'm a <strong className="text-stone-100">Production Engineer at Webull Technologies</strong>, based in St. Pete, FL.
  
  I help build a <strong className="text-stone-100">JAVA-based</strong> monitoring platform, monitor system by <strong className="text-stone-100">Grafana and Prometheus</strong>, configure and optimize services in <strong className="text-stone-100">Kubernetes</strong> and investigate online <strong className="text-stone-100">FIX protocol</strong> issues and recover Mysql database.
  
  Additionally, I organized the PE team to guarantee 7/24 on-call support. Previously, I was a <strong className="text-stone-100">Cloud Engineer</strong> contractor at <strong className="text-stone-100">Novineer, Inc.</strong>, where I contributed to building <strong className="text-stone-100">Lambda functions</strong>, managing <strong className="text-stone-100">S3 storage</strong> and <strong className="text-stone-100">DynamoDB</strong>, as well as writing tests and maintaining <strong className="text-stone-100">CI/CD pipelines</strong>.
</p>

<p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
  In my leisure time, I'm passionate about exploring all <strong className="text-stone-100">cutting-edge technologies</strong>.
  Recently, I've built a personal stock analysis system using <strong className="text-stone-100">yfinance</strong> and <strong className="text-stone-100">prompt engineering</strong> to refine trading strategies—achieving a 60% annualized return in 2025 through iterative experimentation.
  </p>
  <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
  Beyond tech, I enjoy gourmet explorations—researching a new recipe weekly or discovering local restaurants.
  As an scuba diver with <strong className="text-stone-100">PADI Advanced Open Water diver (AOW)</strong> and <strong className="text-stone-100">PADI Enriched Air diver (Nitrax)</strong> certifications, I thrive on underwater adventures.
  I'm also a dedicated skier aiming for <strong className="text-stone-100">AASI Level 1 snowboard</strong> certification to to guide and share snowboarding adventures with fellow enthusiasts.
</p>
    </>
    
  ),
  actions: [
    {
      href: '/assets/QiangYuanResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `My rigorous self-discipline propelled me to become the first in my family to attend university, and my strong sense of responsibility has made me a reliable partner in the eyes of friends and colleagues. Drawing from my student days organizing group activities and learning from exceptional mentors in the workplace, I've honed the ability to pinpoint key issues in chaotic scenarios and lead teams to swiftly identify and resolve them.`,
  aboutItems: [
    {label: 'Location', text: 'Pinellas Park, FL', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Investment, Cooking, Snowboard, Diving', Icon: SparklesIcon},
    {label: 'Employment', text: ' Webull Technoligies', Icon: BuildingOffice2Icon},
    {label: 'Study', text: 'University of FLorida', Icon: AcademicCapIcon},
    
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      }
      // {
      //   name: 'Spanish',
      //   level: 3,
      // },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      // {
      //   name: 'GraphQL',
      //   level: 6,
      // },
    ],
  },
  {
    name: 'Backend development',
    skills: [

      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'C/C++',
        level: 7,
      },
    ],
  },
  {
    name: 'Others',
    skills: [
      {
        name: 'Github',
        level: 10,
      },
      {
        name: 'Linux',
        level: 9,
      },
      {
        name: 'AWS',
        level: 9,
      },
      {
        name: 'pytorch',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
   {
    date: 'Jan 2021 - Dec 2023',
    location: 'University of Florida',
    title: 'Concurrent master in Computer Science and Electrical & Computer Engineering',
    content: <p> </p>,
    //content: <p>Related Courses:</p>,
  },
  {
    date: 'Sep 2015 - Jul 2019',
    location: 'Guangzhou University',
    title: 'Bachelor in Software Engineering',
    content: <p> </p>,
  },
 
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2025 - Present',
    location: 'Webull Technologies',
    title: 'Production Engineer',
    content: (
      <>
        <p>• Contributed to the development and configuration of a Java-based monitoring and alerting platform built with Spring Boot and deployed via Docker, enabling real-time anomaly detection in business traffic.</p>
        <p>• Proactively monitored system-wide infrastructure by Grafana and Prometheus, analyzing traffic, performance, and service availability to maintain 99.99% uptime.</p>
        <p>• Configured and optimized Kubernetes-based service nodes, designing autoscaling strategies to efficiently handle traffic fluctuations and enhance system resilience.</p>
        <p>• Led incident response for production alerts, leveraging Prometheus metrics and ELK logs to identify root causes and restore services, reducing average downtime by 70% to under 10 minutes.</p>
        <p>• Queried and corrected abnormal data entries in MySQL and MongoDB, ensuring data consistency and integrity across services.</p>
        <p>• Maintained FIX Engine monitoring and recovery; diagnosed and resolved TCP connection issues and supported secure SFTP data transfers to ensure 100% reliable data exchange.</p>
        <p>• Automated data validation and format conversions using Python scripts during system migrations and upgrades, reducing manual intervention and error rates by 98%.</p>
        <p>• Diagnosed and resolved technical issues from user feedback, tracing problems through ELK logs and application code, reducing ticket resolution time by 80% and preventing recurrence through proactive fixes.</p>
      </>
    ),
  },
  {
    date: 'Sep 2023 - Mar 2024',
    location: 'Novineer, Inc',
    title: 'Cloud Engineer',
    content: (
      <>
      <p> • Orchestrated AWS Elastic Container Service (ECS) deployments, optimizing Docker container efficiency and scalability with task definitions and Auto Scaling Groups (ASG).</p>
    <p>
      • Designed RESTful API architectures with Lucidchart, ensuring REST compliance and clear workflow visualization.
    </p>
    <p>
      • Implemented 17 REST APIs into scalable serverless solutions using AWS Serverless Application Model (SAM) and Lambda, integrated with API Gateway, achieving sub-3-second response times.
    </p>
    <p>
      • Implemented secure storage and retrieval of large files in Amazon S3 using pre-signed URLs. Created and stored various types of data within 5 NoSQL tables, implemented GSI for efficient data retrieval in AWS DynamoDB.
    </p>
    <p>
      • Authored unit tests and integration tests for 42 Lambda functions using Pytest and Moto, slashing post-deployment issues by 90%. Built and maintained CI/CD pipeline via AWS SAM and GitHub Actions.
    </p>
    <p>
      • Deployed frontend applications on AWS Amplify and streamlined API documentation in Postman for frontend teams, saving 70% communication time.
    </p>
    </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Chris Huang',
      text: 'Qiang Yuan is diligent and responsible in his work, with clear and fluent code logic. He excels in communicating with others and has outstanding self-learning abilities. He consistently delivers tasks with high quality and quantity.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Shery Guan',
      text: "I have had the pleasure to know Qiang at UF in the engineering school and I must say, his dedication and expertise impressed me. When doing tasks together, Qiang is always willing to share his insight and executes tasks with patience.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me if you have any questions or if you just want to connect.',
  items: [
    {
      type: ContactType.Email,
      text: 'acrazytomas@gmail.com',
      href: 'mailto:acrazytomas@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Pinellas Park FL, US',
      href: 'https://www.google.ca/maps/place/Gainesville,+FL/@29.686394,-82.4023193,12z/',
    },
    {
      type: ContactType.Instagram,
      text: '@thomasyuan97',
      href: 'https://www.instagram.com/thomasyuan97/',
    },
    {
      type: ContactType.Github,
      text: 'QiangYuan0828',
      href: 'https://github.com/QiangYuan0828',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/QiangYuan0828'},
//{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/qiang-yuan-622014221/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/thomasyuan97/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
