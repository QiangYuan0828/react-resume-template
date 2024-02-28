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
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
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
  name: `I'm Qiang Yuan.`,
  description: (
    <>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I graduated from ECE and CS concurrent master on Dec, 2023 from University of Florida, currently I am a <strong className="text-stone-100">Cloud Engineer</strong> contractor, currently working
        at <strong className="text-stone-100">Novineer, Inc</strong> helping build a Lambda, S3, dyanmoDB, and write test, maintain CICD pipeline. I am open to any remote/onsite fulltime software Engineer in US.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I would like to learning <strong className="text-stone-100">Cooking</strong>,
         <strong className="text-stone-100">Workout</strong>, or learning newest technologies in {' '}
        <strong className="text-stone-100">ML and Could</strong>.
      </p> */}
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
  I graduated with  <strong className="text-stone-100">a concurrent Master of Science in CS and ECE</strong> in December 2023 from the <strong className="text-stone-100">University of Florida</strong>. 
  Currently, I am a <strong className="text-stone-100">Cloud Engineer</strong> contractor at <strong className="text-stone-100">Novineer, Inc.</strong>, 
  where I contribute to building Lambda functions, managing S3 storage, and DynamoDB, as well as writing tests and maintaining CI/CD pipelines. 
</p>
<p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
 I am actively seeking a full-time position as a <strong className="text-emphasis">Software Engineer</strong>, open to both remote and onsite opportunities in the US. In my leisure, I enjoy learning about <strong className="text-stone-100">cooking</strong> and <strong className="text-stone-100">workout</strong> routines, as well as keeping up with the latest technologies in <strong className="text-stone-100">Machine Learning and Cloud Computing</strong>.
</p>
      {/* <div className="technical-skills">
  <h1 className="section-title text-stone-200">Technical Skills</h1>
  <ul className="skills-list text-stone-200">
    <li><strong>Programming Languages:</strong> Java, Python, C/C++, JavaScript, Linux Shell scripting</li>
    <li><strong>Tools & Frameworks:</strong> Git, AWS, Docker, Maven, Node.js, Anaconda, Pthread, Pytorch</li>
    <li><strong>Database:</strong> Oracle, MySQL, DynamoDB, SQLite</li>
  </ul>
</div> */}

    </>
    
  ),
  actions: [
    {
      href: '/assets/QiangYuan_24_1.pdf',
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
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Gainesville, FL', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Cooking, workout, snowboard, diving', Icon: SparklesIcon},
    {label: 'Study', text: 'University of FLorida', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'contractor of Novineer, inc.', Icon: BuildingOffice2Icon},
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
    date: 'Sep 2015 - Jul 2019',
    location: 'Guangzhou University',
    title: 'Bachelor in Software Engineering',
    content: <p>Related Course:</p>,
  },
  {
    date: 'Jan 2021 - Dec 2023',
    location: 'University of Florida',
    title: 'Concurrent master in Computer Science and Electrical & Computer Engineering',
    content: <p>Related Courses:</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2023 - Present',
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
  // {
  //   date: 'March 2007 - February 2010',
  //   location: 'Garage Startup Studio',
  //   title: 'Junior bug fixer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
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
      text: 'Gainesville FL, US',
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
