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
  I’m a <strong className="text-stone-100">Production Analyst at Webull Technologies, Inc.</strong> in St. Petersburg, FL.
</p>

<p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
  Outside of work, I enjoy learning about investing, trying new recipes, and discovering local restaurants. I also love scuba diving and snowboarding.
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
    {label: 'Employment', text: 'Webull Technologies, Inc.', Icon: BuildingOffice2Icon},
    {label: 'Study', text: 'University of Florida', Icon: AcademicCapIcon},
    
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
    title: 'Dual Master of Science Degrees in Computer Science and Electrical and Computer Engineering',
    content: <p> </p>,
    //content: <p>Related Courses:</p>,
  },
  {
    date: 'Sep 2015 - Jul 2019',
    location: 'Guangzhou University',
    title: 'Bachelor of Engineering in Software Engineering',
    content: <p> </p>,
  },
 
];

export const experience: TimelineItem[] = [
  {
    date: 'May 6, 2024 – Present',
    location: 'Webull Technologies, Inc. · St. Petersburg, FL',
    title: 'Production Analyst',
    content: (
      <>
        <p>Python, Java, GitLab, SQL, FIX, Grafana, Prometheus, ELK, Jenkins</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Work with developers to manage version control and resolve code conflicts. 10%
            <ul className="list-[circle] pl-5">
              <li>In Gitlab</li>
            </ul>
          </li>
          <li>
            Support the release of new software updates by coordinating and communicating changes. 10%
            <ul className="list-[circle] pl-5">
              <li>Support the release of new software updates by coordinating and communicating production changes to affected teams.</li>
            </ul>
          </li>
          <li>
            Write scripts or tools to automate manual tasks. 10%
            <ul className="list-[circle] pl-5">
              <li>Write Python, SQL, and Bash scripts and tools to automate manual, time-sensitive operation tasks, including data validation and format migrations and upgrades.</li>
              <li>Use commercially available AI tools to assist with writing automation scripts and reviewing logs during incident triage; this does not involve AI research or developing or training AI models.</li>
            </ul>
          </li>
          <li>
            Document processes and assist in creating guides for team use. 10%
            <ul className="list-[circle] pl-5">
              <li>Document operational processes and create runbooks, troubleshooting guides, and onboarding materials for team use.</li>
            </ul>
          </li>
          <li>
            Set up and maintenance of automated build, test, and deployment processes. 15%
            <ul className="list-[circle] pl-5">
              <li>Set up and maintain automated build, test, and deployment processes using Jenkins and Docker.</li>
              <li>Maintain production FIX engine sessions with exchanges and market participants; diagnose session-level issues (logon, heartbeat, sequence recovery) and application-level message issues to keep order flow stable.</li>
            </ul>
          </li>
          <li>
            Monitor the health and performance of backend systems and applications. 15%
            <ul className="list-[circle] pl-5">
              <li>Monitor the health and performance of backend trading systems and applications using Prometheus, Grafana, and the ELK stack.</li>
              <li>Contribute to and maintain an internal Java-based monitoring and alerting platform (Spring Boot, Docker) and Grafana dashboards for real-time service APIs.</li>
            </ul>
          </li>
          <li>
            Track and report system issues using internal tools, escalating when necessary. 5%
            <ul className="list-[circle] pl-5">
              <li>Track and report system issues using internal tools, assess severity, and escalate to development teams when necessary.</li>
              <li>Investigate and resolve data discrepancies between post-trade and sales &amp; trading systems and data inconsistencies in MySQL databases using SQL and Python.</li>
            </ul>
          </li>
          <li>
            Respond to production issues and troubleshooting incidents as they arise. 5%
            <ul className="list-[circle] pl-5">
              <li>Respond to production issues and troubleshooting incidents as they arise, performing root cause analysis and restoring service.</li>
            </ul>
          </li>
          <li>
            Monitor scheduled tasks and reports to ensure successful completion. 10%
            <ul className="list-[circle] pl-5">
              <li>Monitor scheduled tasks and reports that include daily SOD file processing, corporate action events, and post-trade reconciliation reports, to ensure successful completion.</li>
            </ul>
          </li>
          <li>Participate in an on-call rotation to provide support during evenings or weekends. 10%</li>
        </ul>
      </>
    ),
  },
  {
    date: 'Sep 29 – Dec 11, 2023 and Jan 31 – Mar 18, 2024',
    location: 'Novineer Inc. · Daytona Beach, FL (Remote)',
    title: 'Cloud Engineer (Contract Role)',
    content: (
      <>
        <p>Python, Linux, AWS, Docker, Git, CI/CD</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Deployed and maintained Python backend services across Linux-based AWS EC2/ECS environments, using Docker and shell-based tooling to configure, troubleshoot, and scale production workloads.</li>
          <li>Built 17 REST APIs in Python using AWS Lambda, SAM, and API Gateway, integrating S3 pre-signed file access and DynamoDB data services while achieving sub-3-second API response times.</li>
          <li>Developed unit and integration tests for 42 Python Lambda functions using Pytest and Moto, reducing post-deployment issues by 90%, and automated build, testing, and deployment workflows through AWS SAM and GitHub Actions.</li>
        </ul>
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
      text: "I have had the pleasure to know Qiang at UF in the Engineering school and I must say, his dedication and expertise impressed me. When doing tasks together, Qiang is always willing to share his insight and executes tasks with patience.",
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
