/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title:
    "Fraz Liaqat Portfolio | MERN Developer | Flutter Developer | AI Engineer",
  description:
    "Fraz Liaqat is a Computer Science student, MERN Stack Developer, Flutter Developer, and AI Engineer specializing in modern web and mobile applications. Explore projects, skills, and professional work.",
  og: {
    title:
      "Fraz Liaqat Portfolio | MERN Developer | Flutter Developer | AI Engineer",
    type: "website",
    url: "https://frazliaqat.online/",
    image: "https://frazliaqat.online/og-image.png",
    description:
      "Building modern web applications, AI solutions and software systems",
  },
  sameAs: [
    "https://github.com/Fraz133",
    "https://www.linkedin.com/in/fraz-liaqat-968b52268/",
  ],
};

//Home Page
const greeting = {
  title: "Fraz Liaqat",
  logo_name: "F",
  nickname: "fraz",
  subTitle:
    "MERN Stack & Flutter Developer | AI Engineer. I build scalable web applications, mobile applications, and intelligent software systems.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/Fraz133/masterPortfolio",
  githubProfile: "https://github.com/Fraz133",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Fraz133/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/fraz-liaqat-968b52268/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@frazliaqat",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "X-Twitter",
    link: "https://x.com/FarazBa09823573",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61587663744229",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/fraz_.ali",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "AI & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building and deploying production-ready AI/ML models for real-world applications using TensorFlow, PyTorch and Keras",
        "⚡ Experienced in Computer Vision, NLP and building intelligent systems with deep learning architectures",
        "⚡ Data analysis and feature engineering using Pandas, NumPy and Scikit-learn for predictive modelling",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#013243",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            backgroundColor: "transparent",
            color: "#F37626",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            backgroundColor: "transparent",
            color: "#5C3EE8",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            backgroundColor: "transparent",
            color: "#FFD21E",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Web Development (MERN)",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive single-page web applications using ReactJS, Redux and Tailwind CSS",
        "⚡ Developing robust and secure RESTful APIs and backend services using NodeJS, ExpressJS and JWT",
        "⚡ Designing, querying and managing relational and non-relational databases using MongoDB and MySQL",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#333333",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Flutter Developer",
      fileName: "FlutterImg",
      skills: [
        "⚡ Developing beautiful, responsive, and high-performance cross-platform applications using Flutter and Dart",
        "⚡ Designing user interfaces and crafting interactive wireframes/prototypes in Figma & Adobe XD",
        "⚡ Integrating cloud infrastructure like Firebase and third-party REST APIs for full-scale functionality",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#0175C2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Apple",
          fontAwesomeClassname: "simple-icons:apple",
          style: {
            color: "#A2AAAD",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/frazali133/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/frazliaqat1116",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/frazliaqat",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/frazz133",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Information Technology University (ITU)",
      subtitle: "Bachelors in Computer Science",
      logo_path: "ITU.png",
      alt_name: "ITU",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ I have taken core computer science courses like Object Oriented Programming (OOP), Data Structures and Algorithms (DSA), and Database Management Systems.",
        "⚡ Apart from this, I have done courses like Programming in Python, Mobile Application Development, and Web Engineering.",
        "⚡ I actively participate in coding hackathons and software projects to apply theoretical computer science knowledge to real-world problems.",
      ],
      website_link: "https://itu.edu.pk/",
    },
    {
      title: "Punjab Group of Colleges (PGC)",
      subtitle: "Intermediate in Computer Science (ICS)",
      logo_path: "pgc.png",
      alt_name: "PGC",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I completed my Intermediate in Computer Science (ICS), focusing on mathematics, statistics, and computer programming.",
        "⚡ I learned programming fundamentals and basics of web development during my intermediate years.",
        "⚡ Developed strong logical reasoning and problem-solving fundamentals which helped build my foundation for a career in technology.",
      ],
      website_link: "https://pgc.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Generative AI: Prompt Engineering Basics",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/8IKQCOFKAAUX",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Introduction to Generative AI",
      subtitle: "- Google Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/Y566RK68ZA5M",
      alt_name: "Google Cloud",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Ads for Beginners",
      subtitle: "- Coursera Project Network",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/4A6QAVYE8CF6",
      alt_name: "Google",
      color_code: "#4285F499",
    },
    {
      title: "Transform Your Business with Augmented and Virtual Reality",
      subtitle: "- Madecraft",
      logo_path: "madecraft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/A653J60KMG39",
      alt_name: "Madecraft",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with growing startups and technology companies as an AI/ML Engineer, Fullstack Web Developer, and Mobile Developer. I also enjoy volunteering as a Teaching Assistant to help junior peers learn software engineering fundamentals.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Internships",
      work: true,
      experiences: [
        {
          title: "Flutter Intern",
          company: "Funzoft Technologies",
          company_url: "https://funzoft.com/",
          logo_path: "funzoft.jpg",
          duration: "May 2026 - Present",
          location: "Lahore, Punjab, Pakistan",
          description:
            "Developing and maintaining cross-platform mobile applications using the Flutter framework. Collaborating with design and product teams to implement clean user interfaces and optimize mobile app performance.",
          color: "#0080ff",
        },
        {
          title: "MERN Stack Developer",
          company: "Orzeh Technologies",
          company_url: "https://orzeh.tech",
          logo_path: "orzeh_technologies.jpg",
          duration: "Feb 2026 - Present",
          location: "Lahore, Punjab, Pakistan",
          description:
            "Building and maintaining scalable web applications using React, TypeScript, and Node.js. Managing server deployments and ensuring reliable, high-performance application delivery.",
          color: "#4db33d",
        },
        {
          title: "AI/ML Engineer",
          company: "AiBee",
          company_url: "https://aibee.pk/",
          logo_path: "AIBee.jpg",
          duration: "Sep 2025 - Dec 2025",
          location: "Lahore, Punjab, Pakistan",
          description:
            "Worked with Python to develop and optimize a Retrieval-Augmented Generation (RAG) based chatbot. Refined prompts for LLM-based chatbot systems to improve response quality and accuracy. Preprocessed and cleaned datasets for machine learning tasks.",
          color: "#ff4f00",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Teaching Assistant - Software Engineering",
          company: "Information Technology University (ITU)",
          company_url: "https://itu.edu.pk/",
          logo_path: "ITU.png",
          duration: "Jan 2026 - June 2026",
          location: "Lahore, Punjab, Pakistan",
          description:
            "Assisted Prof. Dr. Yasar Mehmood with lab orchestration, assignment evaluation, and tutoring undergraduate students in core Software Engineering principles.",
          color: "#8C1515",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a diverse set of modern tech stacks. I specialize in building full-stack web & mobile applications, integrating advanced AI models (ranging from computer vision to deepfake audio classifiers), and deploying secure, high-performance software systems.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Fraz_portfolio_hero_high_quality.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Email Me",
    subtitle:
      "Feel free to reach out to me directly via email at frazliaqat1116@gmail.com. I will respond to your queries as soon as possible.",
    link:
      "https://mail.google.com/mail/?view=cm&fs=1&to=frazliaqat1116@gmail.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Sukh chayn Gardens Lahore , Punjab Pakistan",
    locality: "Lahore",
    country: "Pakistan",
    region: "Punjab",
    postalCode: "",
    streetAddress: "Sukh chayn Gardens",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/jYmsVCSTuLNsC2fP9",
  },
  phoneSection: {
    title: "Call & WhatsApp Me",
    subtitle:
      "Direct communication is key. Feel free to start a WhatsApp chat or call me directly at +92 3081796116.",
    phone_number: "tel:+923081796116",
    whatsapp_link:
      "https://wa.me/923081796116?text=Hi%20Fraz!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you.",
  },
};

const competitiveProjects = {
  title: "Competitions & Hackathons",
  subtitle:
    "Highlighting hackathons, coding challenges, and app development competitions I participated in, along with the solutions I built and positions won.",
  hackathons: [
    {
      title: "Code Rush App Development Competition",
      award: "3rd Position ",
      year: "2026",
      projectName: "Snacc",
      subtitle: "Food Delivery App",
      description:
        "A premium, feature-rich iOS food delivery application featuring a complete order flow from discovery, cart, checkout, confirmation, to real-time order tracking. Implemented geographical distance-based checkout validation (< 5 km from restaurant), simulated courier speed dynamics at 40 km/h, and live tracking UI using MapKit integration.",
      techStack: [
        {
          name: "SwiftUI",
          iconifyClassname: "vscode-icons:file-type-swiftui",
        },
        {
          name: "Swift",
          iconifyClassname: "logos:swift",
        },
        {
          name: "Firebase",
          iconifyClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          name: "MapKit",
          iconifyClassname: "mdi:map-marker-radius",
          style: {
            color: "#007AFF",
          },
        },
        {
          name: "MVVM",
          iconifyClassname: "mdi:sitemap",
          style: {
            color: "#FF5A5F",
          },
        },
      ],
      githubUrl: "https://github.com/Fraz133/Snacc",
      videoUrl: "/videos/Snacc.mp4",
      splashVideoUrl: "/videos/splash_animation.mp4",
      coverUrl: "/videos/Snacc_cover.png",
      organizer: {
        name: "GDG ITU",
        logoPath: "/videos/gdg_itu_logo.png",
      },
    },
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  competitiveProjects,
};
