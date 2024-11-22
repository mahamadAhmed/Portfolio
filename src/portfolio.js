// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mohammed Ahmed | Software Engineer",
  description:
    "I am Mohammed Ahmed, skilled in AI, machine learning, deep learning, and natural language processing, with hands-on experience in projects such as image generation and NLP. My work leverages cutting-edge technologies to achieve impactful results. Passionate about driving innovation, I aim to contribute my expertise in a dynamic tech environment. Additionally, I am proficient in Flutter, APIs, and pre-trained models.",
  og: {
    title: "Mohammed Ahmed | Software Engineer",
    type: "website",
    url: "https://mohamedgpt.co/",
  },
};

//Home Page
const greeting = {
  title: "Who I am?",
  logo_name: "Mohammed Ahmed",
  subTitle:
    "I am Mohammed Ahmed, skilled in AI, machine learning, deep learning, and natural language processing, with hands-on experience in projects such as image generation and NLP. My work leverages cutting-edge technologies to achieve impactful results. Passionate about driving innovation, I aim to contribute my expertise in a dynamic tech environment. Additionally, I am proficient in Flutter, APIs, and pre-trained models.",
  resumeLink:
    "https://drive.google.com/file/d/1j-RcgNQIq-pO54v0gRL5iMZowtufocCf/view?usp=sharing",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mohammed-ahmed-96b023234/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/mahamadAhmed",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Email",
    link: "mailto:mahammedgpt@gmail.com",
    fontAwesomeIcon: "fas fa-envelope", // Reference https://fontawesome.com/icons/envelope?style=brands
    backgroundColor: "#0078D4", // Reference https://simpleicons.org/?q=outlook
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/+201141835675",
    fontAwesomeIcon: "fa-whatsapp", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
];

const skills = {
  data: [
    {
      title: "ML, DL & NLP",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience in working with Computer Vision and Natural Language Processing projects",
        "⚡ Applying effectively standard implementations of Deep Learning and Machine Learning algorithms",
      ],
      softwareSkills: [
        {
          skillName: "Pytorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: "#EE4C2C",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
        },

        {
          skillName: "Scikit",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
            backgroundColor: "white",
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
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡Building responsive web frontends with HTML, CSS, JavaScript, Bootstrap, Django, and Laravel PHP, creating engaging and interactive websites",
        "⚡ Developing mobile applications using Flutter and Dart, with experience in Firebase for backend services",
        "⚡ Creating robust backends with Laravel and Django, and proficient in working with APIs",
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
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos-bootstrap",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "black",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "logos:laravel",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos:flutter",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "logos:dart",
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            color: "#3880FF",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "file-icons:flask",
          // style: {
          //   backgroundColor: "#512BD4",
          //   color: "white",
          // },
        },
        {
          skillName: "API",
          fontAwesomeClassname: "hugeicons:api",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos-django-icon",
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Integration of databases",
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "MS SQL Server",
    //       fontAwesomeClassname: "simple-icons:microsoftsqlserver",
    //       style: {
    //         color: "#CC2927",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "simple-icons:heroku",
    //       style: {
    //         color: "#430098",
    //       },
    //     },
    //     {
    //       skillName: "MySQL",
    //       fontAwesomeClassname: "simple-icons:mysql",
    //       style: {
    //         color: "#4479A1",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#0db7ed",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#4169E1",
    //       },
    //     },
    //     {
    //       skillName: "SQLite",
    //       fontAwesomeClassname: "simple-icons:sqlite",
    //       style: {
    //         color: "#003B57",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "LeetCode",
//       iconifyClassname: "simple-icons:leetcode",
//       style: {
//         color: "#FFA116",
//       },
//       profileLink: "https://leetcode.com/TiDev00",
//     },
//     {
//       siteName: "Coursera",
//       iconifyClassname: "simple-icons:coursera",
//       style: {
//         color: "#0056D2",
//       },
//       profileLink:
//         "https://www.coursera.org/user/4f92758fceccd23cf7092d57bfe5b49e",
//     },
//     // {
//     //   siteName: "HackerRank",
//     //   iconifyClassname: "simple-icons:hackerrank",
//     //   style: {
//     //     color: "#2EC866",
//     //   },
//     //   profileLink: "https://www.hackerrank.com/TiDev00",
//     // },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "https://www.kaggle.com/tidev00",
//     },
//     {
//       siteName: "FreeCodeCamp",
//       iconifyClassname: "simple-icons:freecodecamp",
//       style: {
//         color: "#0A0A23",
//       },
//       profileLink: "https://www.freecodecamp.org/tidev00",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Cairo University",
      subtitle:
        "Bachelor Degree: Faculty Of Computers and Artificial Intelligence - Department: Artificial Intelligence",
      logo_path: "Cairo University.png",
      alt_name: "FCAI",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Developed expertise in AI algorithms, machine learning, natural language processing, computer vision " +
        "and intelligent systems.",
        "⚡ Gained a deep understanding of AI research methodologies.",
        "⚡ Studied fundamental software engineering subjects throughout the year, including data structures, " +
        "algorithms, database management systems, and operating systems.",
        "⚡ Completed additional courses in software design, computer programming, project management, IT security, " +
        "and Full Stack Development.",
      ],
      website_link: "https://fcai.cu.edu.eg",
    },
    // {
    //   title: "Polytechnic School of Dakar",
    //   subtitle: "Master of Software Engineering",
    //   logo_path: "ucad.png",
    //   alt_name: "ESP",
    //   duration: "2018 - 2020",
    //   descriptions: [
    //     "⚡ Conducted research in the field of software engineering, culminating in a thesis.",
    //     "⚡ Developed and uploaded a comprehensive remote control system solution, including a mobile application and " +
    //     "a back-office website, to my GitHub account.",
    //     "⚡ Completed coursework in software engineering, with advanced studies in programming, database management " +
    //     "systems, artificial intelligence, expert systems, data mining, and more.",
    //   ],
    //   website_link: "http://www.esp.sn/",
    // },
    // {
    //   title: "Polytechnic School of Dakar",
    //   subtitle: "Bachelor of Software Engineering",
    //   logo_path: "ucad.png",
    //   alt_name: "ESP",
    //   duration: "2017 - 2018",
    //   descriptions: [
    //     "⚡ Earned my bachelor's degree following a scholarship internship at the Banking Company of West Africa (CBAO) " +
    //     "and the submission of a work experience report.",
    //     "⚡ Studied fundamental software engineering subjects throughout the year, including data structures, " +
    //     "algorithms, database management systems, and operating systems.",
    //     "⚡ Completed additional courses in software design, computer programming, project management, IT security, " +
    //     "and Full Stack Development.",
    //   ],
    //   website_link: "http://www.esp.sn/",
    // },
    // {
    //   title: "IMES",
    //   subtitle: "Associate's Degree",
    //   logo_path: "imes.png",
    //   alt_name: "ESP",
    //   duration: "2015 - 2017",
    //   descriptions: [
    //     "⚡ Completed preparatory courses for elite French Institutes of Higher Education competitive exams (CPGE).",
    //     "⚡ Received high-quality instruction in theoretical and scientific subjects, including Mathematics, Physics, " +
    //     "and Computer Science, as well as French and foreign languages.",
    //     "⚡ Managed a rigorous workload, averaging over 60 hours per week dedicated to lessons and personal study.",
    //     "⚡ Accumulated 120 ECTS credits during CPGE coursework.",
    //   ],
    //   website_link:
    //     "https://www.enseignementsup-recherche.gouv.fr/fr/classes-preparatoires-aux-grandes-ecoles-cpge-46496",
    // },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning Course",
    //   subtitle: "Andrew Ng",
    //   logo_path: "stanford_online_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/978V2MU8QE75",
    //   alt_name: "Stanford Online",
    //   color_code: "#B50035",
    // },
    // {
    //   title: "Natural Language Processing Specialization",
    //   subtitle: "Younes Mourri, Lukasz Kaiser",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/certificate/XUMDCNZJD8VJ",
    //   alt_name: "deeplearning.ai",
    //   color_code: "white",
    // },
    // {
    //   title: "Angular Full Stack Development",
    //   subtitle: "Jogesh Muppala",
    //   logo_path: "HongKong_logo.jpg",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/certificate/ZKKKHBGXD8F4",
    //   alt_name: "The Hong Kong University of Science and Technology",
    //   color_code: "white",
    // },
    // {
    //   title: "React Full Stack Development",
    //   subtitle: "Jogesh Muppala",
    //   logo_path: "HongKong_logo.jpg",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/certificate/J45UNW886XBU",
    //   alt_name: "The Hong Kong University of Science and Technology",
    //   color_code: "white",
    // },
    {},
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "WORK EXPERIENCE",
  description:
    "I've worked with dynamic startups and established companies like Technocolabs Softwares. My expertise includes developing and optimizing machine learning algorithms, instructing online C++ and OOP courses, and creating RESTful APIs",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "WORK EXPERIENCE",
      experiences: [
        {
          title: "Instructor",
          company: "Online Instructor",
          company_url: "",
          logo_path: "Online Instructor.png",
          duration: "Dec 2021 - Mar 2022",
          location: "Online",
          description:
            "Conducted online C++ and Object-Oriented Programming (OOP) courses for college students and Developed comprehensive lesson plans and instructional materials to facilitate effective learning.",
          color: "#0C7DFF",
        },
        {
          title: "Machine Learning Engineer Intern.",
          company: "Technocolabs Softwares",
          company_url: "",
          logo_path: "Technocolabs Softwares.png",
          duration: "March 2023 - May 2023",
          location: "Remote",
          description:
            "Assisted in developing and optimizing machine learning algorithms to improve company products.Collaborated with a team of data scientists to analyze large datasets and extract meaningful insights and Implemented data preprocessing techniques to ensure high-quality inputs for machine learning models and Participated in daily stand-up meetings and contributed to project planning and execution and Gained hands-on experience with Python, TensorFlow, and other machine learning tools and libraries",
          color: "#004497",
        },
        {
          title: "Python Developer Intern",
          company: "Robusta",
          company_url: "",
          logo_path: "Python.png",
          duration: "Aug 2023 – Sep 2023",
          location: "Egypt",
          description:
            "Developed RESTful APIs with Flask, enhancing system interoperability and enabling seamless data exchange, applying PyUnit for unit testing to ensure code quality and reliability and Worked closely with frontend developers for API integration, ensuring a consistent and functional user experience.",
          color: "#2C3A50",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "NLP Researcher",
    //       company: "Ciena",
    //       company_url: "https://www.ciena.ca",
    //       logo_path: "ciena_logo.png",
    //       duration: "Jun 2022 -  Nov 2022",
    //       location: "Montreal, Canada",
    //       description:
    //         "As an AI researcher at an American telecommunications networking equipment and software services " +
    //         "supplier headquartered in Hanover, Maryland, I was responsible for advancing Ciena's documentation " +
    //         "system's science and technology. I Led the design and implementation of advanced NLP algorithms and " +
    //         "machine learning models for an automatic keyword extraction tool in internal application documentation. ",
    //       color: "#CF0030",
    //     },
    //     {
    //       title: "Fullstack engineer",
    //       company: "Atos",
    //       company_url: "https://atos.net/en/",
    //       logo_path: "atos_logo.png",
    //       duration: "Dec 2020 -  Aug 2021",
    //       location: "Dakar, Senegal",
    //       description:
    //         "At a French multinational information technology service and consulting company specializing in hi-tech " +
    //         "transactional services, unified communications, cloud, big data, and cybersecurity, I served as a " +
    //         "Research and Development Engineer. My role involved designing and developing customized platforms to meet " +
    //         "client needs, encompassing front-end website architecture, user interface design, " +
    //         "back-end web applications, and API development.",
    //       color: "#0066A1",
    //     },
    //     {
    //       title: "Production support engineer",
    //       company: "Banque Nationale pour le Développement Économique",
    //       company_url: "https://www.bnde.sn/",
    //       logo_path: "bnde_logo.jpeg",
    //       duration: "Oct 2020 - Nov 2020",
    //       location: "Dakar, Senegal",
    //       description:
    //         "At BNDE, a national financing entity actively contributing to the implementation of Senegal's " +
    //         "Accelerated Growth Strategy and the country's overall development, I served as a Production Engineer " +
    //         "Support. In this role, I prioritized and efficiently addressed Business As Usual support inquiries, " +
    //         "ensuring compliance with SLA terms. I also played a key role in maintaining application stability, " +
    //         "supervising incident and problem resolution within the team, assisting with complex incidents, and " +
    //         "ensuring the application of effective problem-solving techniques and processes.",
    //       color: "#E04A00",
    //     },
    //     {
    //       title: "Fullstack engineer",
    //       company: "Société Nationale des Télécommunications du Sénégal",
    //       company_url: "https://www.sonatel.sn/",
    //       logo_path: "sonatel_logo.png",
    //       duration: "Mar 2020 - Aug 2020",
    //       location: "Dakar, Senegal",
    //       description:
    //         "Fullstack Engineer at Sonatel, Senegal's leading telecommunications provider and affiliate " +
    //         "of the France Telecom Group. Responsible for testing, integrating, and deploying applications " +
    //         "in production environments with versatile expertise. Designed and implemented webservices for " +
    //         "mobile applications and web platforms, managing database configuration and initial user creation " +
    //         "via LDAP. Developed mobile applications entirely using Ionic, overseeing feature integration and " +
    //         "deployment via Android Studio. Led the design of client-side web interfaces, integrating " +
    //         "functionalities and managing dependencies with npm. Conducted analysis and optimized running " +
    //         "application processes for improved performance and reliability. Contributed significantly to " +
    //         "enhancing Sonatel's telecommunications infrastructure.",
    //       color: "#15979A",
    //     },
    //     {
    //       title: "Network administrator",
    //       company: "Compagnie Bancaire de l'Afrique Occidentale",
    //       company_url: "https://www.attijariwafabank.com/en",
    //       logo_path: "cbao_logo.png",
    //       duration: "Jun 2018 - Jul 2018",
    //       location: "Dakar, Senegal",
    //       description:
    //         "At CBAO Senegal, a leader in the Senegalese banking market, I served as a Network Administrator. " +
    //         "In this role, I was responsible for the installation, configuration, and maintenance of computer " +
    //         "networks and systems. I efficiently identified and resolved issues related to computer networks and " +
    //         "systems, collaborated with IT support, and managed network administration tasks.",
    //       color: "#F4B52D",
    //     },
    //     {
    //       title: "Python developer",
    //       company: "Technologies Consulting Services Entreprise",
    //       company_url: "http://www.tcs.sn/index.php",
    //       logo_path: "tcs_logo.png",
    //       duration: "Aug 2016 - Sep 2016",
    //       location: "Dakar, Senegal",
    //       description:
    //         "At an organization affiliated with DELL, specializing in consulting and services for Senegalese " +
    //         "companies and individuals, I worked as a Python Developer. My role primarily involved designing and " +
    //         "developing RESTful APIs for internal and partner use. Additionally, I collaborated closely with UX and " +
    //         "front-end developers.",
    //       color: "#1ABCFF",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Member",
    //       company: "Galsen Dev </>",
    //       company_url: "https://galsendev.com/",
    //       logo_path: "galsendev_logo.jpeg",
    //       duration: "Nov 2018 - Present",
    //       location: "Dakar, Senegal",
    //       description:
    //         "A community with senegalese developers aiming to create the best environment possible for sharing and helping " +
    //         "each other. Galsen Dev can also help raising interest in young people for subject related to the IT field. As a " +
    //         "community, we are trying to help beginners to sharpen their skills through many webinars, activities and events.",
    //       color: "#4C6AFF",
    //     },
    //     {
    //       title: "Programming Commission Member",
    //       company: "Daara-IT",
    //       company_url: "https://daarait.com/",
    //       logo_path: "daarait_logo.png",
    //       duration: "Aug 2018 - Present",
    //       location: "Dakar, Senegal",
    //       description:
    //         "A strong senegalese community of young actives in the IT field and passionate about technologies. The " +
    //         "community main goal is to promote IT and all the domain related to it. The organization also try to improve the " +
    //         "skills of its member in order to help them in their professional career.",
    //       color: "#275BAA",
    //     },
    //     {
    //       title: "Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "Jul 2018 - Present",
    //       description:
    //         "I am actively contributing to many opensource projects. These contributions include bug fixes, feature requests " +
    //         "and formulating proper documentation for projects.",
    //       color: "#181717",
    //     },
    // ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of vast variety of latest technology tools. Most of them allowed me to learn and develop great" +
    " programming skills.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "manOnTable.svg",
    description:
      "I am available on almost every social media and I will reply within 24 hours. I can help you " +
      "with ML, AI, web, mobile and opensource development.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the
  //     reader individually to change the core of their character.",
  //   link: "",
  //   avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //   title: "Address",
  //   subtitle: "Montreal, Canada",
  //   location_map_link: "https://goo.gl/maps/JQSYLFYzxBLgpMzH7",
  // },
  // phoneSection: {
  //   title: "Phone Number",
  //   subtitle: "",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
