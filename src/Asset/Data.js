

import birdie1 from '../Asset/Projects/Birdie/birdie1.jpg';
import leinland1 from '../Asset/Projects/Leinland/leinland1.jpg';
import leinland2 from '../Asset/Projects/Leinland/leinland1.jpg';
import leinland3 from '../Asset/Projects/Leinland/leinland1.jpg';
import leinland4 from '../Asset/Projects/Leinland/leinland1.jpg';
import leinland5 from '../Asset/Projects/Leinland/leinland1.jpg';
import leinland6 from '../Asset/Projects/Leinland/leinland1.jpg';
import dashboard1 from '../Asset/Projects/SGP Production Live Dashboard/dashboard1.png';
import dashboard2 from '../Asset/Projects/SGP Production Live Dashboard/dashboard2.png';
import dashboard4 from '../Asset/Projects/SGP Production Live Dashboard/dashboard4.png';
import dashboard5 from '../Asset/Projects/SGP Production Live Dashboard/dashboard5.png';
import portfolio1 from '../Asset/Projects/Portfolio/portfolio1.png';
import portfolio2 from '../Asset/Projects/Portfolio/portfolio2.png';
import portfolio3 from '../Asset/Projects/Portfolio/portfolio3.png';
import portfolio4 from '../Asset/Projects/Portfolio/portfolio4.png';
import portfolio5 from '../Asset/Projects/Portfolio/portfolio5.png';
import portfolio6 from '../Asset/Projects/Portfolio/portfolio6.png';
import findbud1 from '../Asset/Projects/FinBud AI/finbud1.png';
import findbud2 from '../Asset/Projects/FinBud AI/finbud2.png';
import findbud3 from '../Asset/Projects/FinBud AI/finbud3.png';
import findbud4 from '../Asset/Projects/FinBud AI/finbud4.jpg';
import findbud5 from '../Asset/Projects/FinBud AI/finbud5.jpg';
import findbud6 from '../Asset/Projects/FinBud AI/finbud6.jpg';
import findbud7 from '../Asset/Projects/FinBud AI/finbud7.jpg';
import findbud8 from '../Asset/Projects/FinBud AI/finbud8.png';

// -------------------------------------------- NAV BAR-------------------------------------------------------
const contactsList = [
    {
        icon: "faEnvelope",
        title: "EMAIL",
        content: "dung.h.le2911@gmail.com",
        type: "link"
    },
    {
        icon: "faMobileScreen",
        title: "PHONE",
        content: "+1 (210) 649-8664",
        type: "link"
    },
    {
        icon: "faCalendar",
        title: "BIRTHDAY",
        content: "NOVEMBER 29, 1998",
        type: "text"
    },
    {
        icon: "faLocationDot",
        title: "LOCATION",
        content: "VALDOSTA, GEORGIA, USA",
        type: "text"
    }
]

const socialList = [
    {
        icon: "faGithub",
        link: "https://github.com/DungLe2911"
    },
    {
        icon: "faLinkedin",
        link: "https://www.linkedin.com/in/dungle2911/"
    }
]

const navBarList = [
    {
        title: "About",
        link: "/"
    },
    {
        title: "Resume",
        link: "/resume"
    },
    {
        title: "Projects",
        link: "/project"
    },
    {
        title: "Contact",
        link: "/contact"
    }
]

// -------------------------------------------- RESUME PAGE -------------------------------------------------------

const educationList = [
    {
        period: "2018 - 2021",
        school: "Washington State University",
        degree: "Bachelor of Science in Computer Science",
        GPA: 3.6
    }
]

const experienceList = [
    {
        company: "South Georgia Pecan Co.",
        time: "June 2025 - Present",
        title: "Full Stack Software Engineer",
        bulletPoints: [
            "Replaced [85%] of physical Control Document process with a digitalized system, which helps reduce information filling by [30%]",
            "Built a user-friendly front-end for [over 250 employees] using [React] and [Material-UI library], mirroring physical paper forms to ensure a smooth transition to the digital process.",
            "Created a backend server with [Spring Boot] and validation rules that matches an existing factory-floor workflow production to capture user’s submission for high data accuracy and audit readiness.",
            "Developed [Microsoft SQL Server] database to store digital form submissions, application settings, and [RBAC resources].",
            "Integrated the app with a [dashboard] that allows management team to generate real-time [trend analysis] on production such as defects, customers, machines, and lines via [Power BI].",
            "Optimized QC reporting and analytics which strengthen product traceability and help boost decision-making speed by [20%]."
        ]
    },
    {
        company: "South Georgia Pecan Co.",
        time: "Dec 2022 - June 2025",
        title: "Data Engineer",
        bulletPoints: [
            "Developed [data visualization tools] using [Power BI] and [Excel] for production monitoring and goal tracking",
            "Implemented [SQL queries] to clean up data on [Microsoft SQL Server] and pull data for daily updates",
            "Performed end-to-end traceability on finished product back to the initial process input with the full ingredient usage.",
            "Automated and optimized data pipelines using [Python] and [SQL procedures], reducing daily correction time from average of [2-3 hours] down to [around 20 minutes], enabling goal tracking and same-day decision making.",
            "Built forecasting dashboard using cleaned historical data to predict production trends and raw material needs, improving planning accuracy and reducing overstock by [15%]."
        ]
    },
    {
        company: "Silicon Valley Bank via Beaconfire",
        time: "Feb 2022 - Dec 2022",
        title: "Software Developer Engineer",
        bulletPoints: [
            "Designed a backend server with [microservices architecture] using [java], [Spring Boot] following [RESTful API] guidelines",
            "Utilized [Hibernate] to generate SQL queries for [MySQL] database interactions, improving development efficiency, and reducing the need of manually creating SQL queries.",
            "Achieved [internal] [microservices] [communication] with [Feign Client] for synchronous calls, and [Kafka] for event – driven workflow",
            "Deployed and managed the application on [AWS] utilizing various of difference services [Dynamo RDS], [SQS], [Secret Manager], and [additional services], while enforcing access control between the services via [IAM] roles and policies.",
            "Maintained the code using [GitLab] and set up [CI/CD] pipeline to dev/preprod/QA deployment on [AWS Code Deploy]."
        ]
    },
    {
        company: "F5 Network Internship",
        time: "Jan 2021 - Dec 2021",
        title: "Front End Developer",
        bulletPoints: [
            "Responsible for the frontend part of the project by using [ReactJS] Framework with functional component.",
            "Utilized Axios libraries for retrieving data and send request between frontend and backend application.",
            "Integrated the frontend application with a terminal that runs in a [Kubernetes] cluster.",
            "Tested the interaction between the elements by using [TestCafe] Framework for unit testing.",
            "Collaborated with the team members on the project through [GitHub].",
            "Responsible for the deploying process of the frontend application through [Heroku] Platform.",
        ]
    },
    {
        company: "Washington State University - HiPDAC Reseach Group ",
        time: "Jan 2021 - Jan 2022",
        title: "Research Assistant",
        bulletPoints: [
            "[Benchmarked different CNN] models under different environment settings",
            "Performed matrix multiplication using already existed library such as [OpenBLAS], [BLIS], [SpGeMM]",
            "Analyzed the result for optimization based on inference time, memory usage",
            "Implemented additional [C/C++] code that helps with generating new matrices for the benchmarking the CNN models",
        ]
    },
    {
        company: "Washington State University",
        time: "Aug 2021 - Dec 2021",
        title: "Undergrate Teaching Assistant",
        bulletPoints: [
            "[Mentored around 17 students] for a college semester",
            "[Supervised over 200 students] practical labs and exams for a college semester",
            "Provided feedback and guidance for each lab section and lecture misunderstanding for students",
            "Helped explain lecture concepts and materials to students that have a hard time understanding",
        ]
    },
]

const toolBox = [
    {
        name: "GitHub",
        iconPath: "GitHub.png",
        category: 'tools'
    },
    {
        name: "HTML",
        iconPath: "HTML.png",
        category: 'Frontend'
    },
    {
        name: "CSS",
        iconPath: "CSS.png",
        category: 'Frontend'
    },
    {
        name: "Javascript",
        iconPath: "JS.png",
        category: 'Frontend'
    },
    {
        name: "NodeJS",
        iconPath: "NodeJS.png",
        category: 'Backend'
    },
    {
        name: "SpringBoot",
        iconPath: "SpringBoot.png",
        category: 'Backend'
    },
    {
        name: "ReactJS",
        iconPath: "ReactJS.png",
        category: 'Frontend'
    },
    {
        name: "Vue",
        iconPath: "Vue.png",
        category: 'Frontend'
    },
    {
        name: "Tailwind",
        iconPath: "Tailwind.png",
        category: 'Frontend'
    },
    {
        name: "Heroku",
        iconPath: "Heroku.png",
        category: 'Frontend'
    },
    {
        name: "Vercel",
        iconPath: "Vercel.png",
        category: 'Frontend'
    },
    {
        name: "Netlify",
        iconPath: "Netlify.png",
        category: 'Frontend'
    },
    {
        name: "MUI",
        iconPath: "MUI.png",
        category: 'Frontend'
    },
    {
        name: "Bootstrap",
        iconPath: "Bootstrap.png",
        category: 'Frontend'
    },
    {
        name: "MySQL",
        iconPath: "MySQL.png",
        category: 'Backend'
    },
    {
        name: "MongoDB",
        iconPath: "MongoDB.png",
        category: 'Backend'
    },
    {
        name: "Microsoft SQL",
        iconPath: "MS SQL.png",
        category: 'Backend'
    },
    {
        name: "Hibernate",
        iconPath: "Hibernate.png",
        category: 'Backend'
    },
    {
        name: "AWS",
        iconPath: "AWS.png",
        category: 'Cloud'
    },
    {
        name: "RabbitMQ",
        iconPath: "RabbitMQ.png",
        category: 'Backend'
    },
    {
        name: "Kafka",
        iconPath: "Kafka.png",
        category: 'Backend'
    },
    {
        name: "GitHub",
        iconPath: "GitHub.png",
        category: 'Tool'
    },
    {
        name: "Kubernetes",
        iconPath: "Kubernetes.png",
        category: 'Tool'
    },
    {
        name: "Docker",
        iconPath: "Docker.png",
        category: 'Tool'
    },
    {
        name: "Postman",
        iconPath: "Postman.png",
        category: 'Tool'
    },
    {
        name: "Jenkins",
        iconPath: "Jenkins.png",
        category: 'Tool'
    },
    {
        name: "OAuth",
        iconPath: "OAuth.png",
        category: 'Backend'
    },
    {
        name: "GitLab",
        iconPath: "GitLab.png",
        category: 'Tool'
    },
    {
        name: "JWT",
        iconPath: "JWT.png",
        category: 'Backend'
    },



]

// -------------------------------------------- ABOUT PAGE-------------------------------------------------------
const serviceList = [
    {
        title: "Web Design",
        text: "Architecting high-performance systems using diverse design patterns for optimal functionality",
        icon: "design.svg",
    },
    {
        title: "Front End Development",
        text: "Professional development of responsive web applications",
        icon: "dev.svg",
    },
    {
        title: "Backend Development",
        text: "High-quality development of consistent, scalable, and secure of backend systems",
        icon: "server.svg",
    },
    {
        title: "Machin Learning Engineer",
        text: "Designing, training, and optimizing AI models to drive intelligent decision-making and automation",
        icon: "AI.svg",
    },
]

const TestimonialsList = [
    {
        avatar: null,
        name: "Daniel Wade",
        position: "Process Engineer & Dept. Assistant Manager",
        datetime: "Mar 19,2025",
        relationship: "direct managed",
        company: "South Georgia Pecan Co.",
        url: "https://www.linkedin.com/in/daniel-wade-769780158/",
        paragraph: [
            "Dung is an exemplary employee, exercising sound judgment and strong analytic skills to any tasks given. Key responsibilities in his current role include data analytics pertaining to inventory control and process flow that are directly reported, assisting in process optimization and product inventory control. Dung possesses a strong work ethic, ensuring that tasks are completed in a timely fashion, along with his strong sense of pride in his work to complete tasks properly. These attributes show a strong attention to detail that comes through in his work in his daily responsibilities and in his optimization skills, creating tools for streamlining and automating data tools.",
        ]
    },
    {
        avatar: null,
        name: "Laurie Wright",
        datetime: "Apr 8,2025",
        position: "Food Safety and Quality Assurance Assistant Manager",
        relationship: "Senior to Dung but not direct managed",
        company: "South Georgia Pecan Co.",
        url: "https://www.linkedin.com/in/laurie-wright-562286187/",
        paragraph: [
            "Hello,",
            "My name is Laurie Wright. I am the Food Safety and Quality Assurance Assistant Manager at South Georgia Pecan in Valdosta, Georgia. I have worked with Mr. Le for a few years. During this time, I have witnessed an intense amounts of growth. He has taken on more responsibilities and has become someone that others look up to.",
            "Mr. Le has exceptional technical skills. There has not been a task that has been given to him that he has not been able to complete. He is very thorough with documentation and extremely detail oriented.",
            "Mr. Le takes his work very seriously. He completes delegated tasks on time. He works well with others. He has a fabulous work ethic; and insists on doing the best job possible.",
            "Mr. Le will do great things as he moves forward in his career path! He would be an extremely valuable asset in any position he fills."
        ]
    },
]

const HiPDACLetter = `${process.env.PUBLIC_URL}/assets/pdf/HiPDAC_Letter.pdf`;
const SmartEZLeter = `${process.env.PUBLIC_URL}/assets/pdf/SmartEZ_Letter.pdf`;
const FreddyLetter = `${process.env.PUBLIC_URL}/assets/pdf/Freddy_Sublet.pdf`;
const NathanLetter = `${process.env.PUBLIC_URL}/assets/pdf/Nathan_Smith.pdf`;

const RecommendationLettersURL = [
    {
        author: "Nathan T Smith",
        authorTitle: "Eastern Plant Manager",
        organization: "South Georgia Pecan Company",
        relationship: "Manager",
        dateGiven: "Feb 3rd, 2025",
        type: "Professional",
        filePath: NathanLetter,
    },
    {
        author: "Frederick Sublet",
        authorTitle: "Safety and Training Manager",
        organization: "South Georgia Pecan Company",
        relationship: "Senior Colleague",
        dateGiven: "May 17th, 2025",
        type: "Professional",
        filePath: FreddyLetter,
    },
    {
        author: "Dingwen Tao",
        authorTitle: "Professor at the Institute of Computing Technology, Chinese Academy of Sciences",
        organization: "HiPDAC Group - Washington State University",
        relationship: "Professor",
        dateGiven: "Dec 5th, 2021",
        type: "Academic",
        filePath: HiPDACLetter,
    },
    {
        author: "Phuong Quang Nguyen",
        authorTitle: "Former Head of SmartEZ IT department",
        organization: "SmartEZ",
        relationship: "Mentor",
        dateGiven: "Aug 9th, 2019",
        type: "Academic",
        filePath: SmartEZLeter,
    }
]

// -------------------------------------------- PROJECT PAGE-------------------------------------------------------

const projectList = [
    //Leinland Project
    {
        name: "Leinland Project",
        company: "South Georgia Pecan Co.",
        description: [
            "The Leinland Project is an initiative aimed at transforming the current physical document control and paperwork process into a fully digital system. By moving to a digital platform, the management team will be able to access live data from the production floor and generate trends across different aspects of production, including shell and kernel operations, customers, production lines, products, and Quality Control results such as pass and fail performance.",
            "At the end of each production run, shift, or working day, supervisors will be able to review and verify the correctness of the recorded information and submit their verification through the system. Once the verification is submitted, the system will automatically generate a PDF document based on the corresponding form and store it as an official snapshot record, ensuring it is available for future audit and compliance needs.",
            "The front-end application is developed using ReactJS and is designed to closely mirror the existing physical forms in order to reduce the learning curve for production floor operators. Validation rules and data checks are implemented by querying the SQL Server database of the existing inventory software, which minimizes the amount of information that operators need to manually enter and improves overall data integrity and accuracy."
        ],
        sourceCodeURL: null,
        imageList: [
            { image: leinland1, legend: "Homepage" },
            { image: leinland1, legend: "Dashboard" },
            { image: leinland2, legend: "People Management Interface" },
            { image: leinland3, legend: "Machine Setting Interface" },
            { image: leinland4, legend: "Digital form - Quality Check" },
            { image: leinland5, legend: "Digital form - Quality Check History Submission" },
            { image: leinland6, legend: "Supervisor Verification" },
            { image: leinland6, legend: "Maintenance Work Order Request" },
            { image: leinland6, legend: "Maintenance Request Live Screen" },
            { image: leinland6, legend: "Management team email Inivation" },
            { image: leinland6, legend: "OTP forget Password" },
        ],
        deployedURL: null,
        category: "Enterprise / Internal Tools",
        techStack: [
            "ReactJS",
            "Material-UI",
            "Spring Boot",
            "SQL Server",
            "Power BI",
            "JWT Authentication",
            "GitHub",
            "Hibernate",
            "RESTful API"
        ]
    },
    //Dashboard Project
    {
        name: "Production Analytics Dashboard",
        company: "South Georgia Pecan Co.",
        description: [
            "The Production Analytics Dashboard is a set of internal tools designed to track real-time production progress across multiple areas of the facility, including shell and kernel operations, production lines, customer orders, and product flow. By comparing live production performance against daily and shift-based targets, the dashboard provides supervisors and management with clear visibility into whether teams are on track, falling behind, or exceeding expectations. These insights help reduce reporting delays, eliminate manual tracking errors, and create a more consistent way to measure performance across different processes and production runs.",

            "In the long term, the data collected through these metrics supports more realistic and achievable production goal-setting by identifying trends, bottlenecks, and improvement opportunities over time. The system also strengthens decision-making around product movement by highlighting which lots are ready to move forward to the next phase of production and which should be placed on hold for further review. This improves overall production accuracy, reduces the risk of processing non-compliant product, and ensures higher-level management can quickly review exceptions, approve next steps, and maintain stronger control over quality and operational efficiency."
        ],
        sourceCodeURL: null,
        imageList: [
            { image: dashboard1, legend: "Daily Production Goal Tracking" },
            { image: dashboard2, legend: "Machine production rate" },
            { image: dashboard1, legend: "Data Cleanup script" },
            { image: dashboard4, legend: "FIFO Product Flow by Area" },
            { image: dashboard5, legend: "Production Hold Checklist on incoming product" },
        ],
        deployedURL: null,
        category: "Enterprise / Internal Tools",
        techStack: [
            "Power BI",
            "Microsoft SQL Server",
            "Microsoft Excel",
            "Spring Boot",
            "Python",
            "Milenium Library"
        ]
    },
    //Portfolio Project
    {
        name: "Personal Portfolio",
        company: "Self-Initiated",
        description: [
            "The Personal Portfolio Website is a professionally developed web application designed to showcase my project work, technical experience, and professional growth in a centralized and well-organized format. The platform highlights past and current projects, associated technologies, and key skills, providing a clear overview of my background and development as a software engineer.",
            "The application also supports personal branding and professional outreach by offering recruiters and collaborators an intuitive, responsive, and user-friendly interface across desktop, tablet, and mobile devices. While inspired by an original design by © Richard Hanrick (credited on the site), the implementation includes custom enhancements and creative modifications that reflect my own technical approach and design decisions."
        ],

        sourceCodeURL: "https://github.com/DungLe2911/DungLe-Portfolio",
        imageList: [
            { image: portfolio1, legend: "Homepage - Desktop View" },
            { image: portfolio2, legend: "Resume Page - Desktop View" },
            { image: portfolio3, legend: "Contact Page - Desktop View" },
            { image: portfolio4, legend: "Homepage - Mobile View" },
            { image: portfolio6, legend: "Homepage - Tablet View" },
        ],
        deployedURL: "https://dungle2911.github.io/DungLe-Portfolio/",
        category: "Web Development",
        techStack: [
            "ReactJS",
            "JavaScript",
            "HTML",
            "CSS",
            "GitHub Pages",
            "Material-UI",
            "EmailJS",
            "React-Toastify",
            "OpenLayers",
        ]
    },
    //Birdie AI Project
    {
        name: "Birdie AI",
        description: [
            "AI nutrition chatbot built with Next.js and OpenAI API for meal planning and food recommendations.",
            "Integrated Stripe subscriptions, JWT authentication, and AWS Lambda backend APIs."
        ],
        sourceCodeURL: "https://github.com/yourname/birdie-ai",
        imageList: [
            {
                image: birdie1,
                legend: "Birdie AI - Chat Interface"

            },
            {
                image: birdie1,
                legend: "Birdie AI - Chat Interface"

            },
            {
                image: birdie1,
                legend: "Birdie AI - Chat Interface"

            },
            {
                image: birdie1,
                legend: "Birdie AI - Chat Interface"
            }
        ],
        deployedURL: "https://birdieapp.co",
        category: "Full Stack / AI"
    },
    //FinBud AI Project
    {
        name: "FinBud AI",
        company: "Independent Project",
        description: [
            "FinBud is an AI-powered FinTech learning platform built using Vue.js and the OpenAI API, designed to help beginners understand financial markets in an interactive and practical way. It allows users to practice stock and cryptocurrency trading, learn how to read market charts, explore specific stocks of interest, and analyze key market metrics such as open and close prices, market capitalization, trading volume, and 52-week high and low data. To reinforce learning, the platform includes AI-generated quizzes and guided explanations that adapt to different knowledge levels.",
            "The application is designed with a mobile-first approach, targeting users who prefer learning on the go. This enables users to access financial education anytime and anywhere, whether commuting, taking short breaks, or casually exploring market trends. By combining accessibility with hands-on learning tools and real-time market insights, FinBud lowers the barrier to entry for financial literacy and FinTech education."
        ],
        sourceCodeURL: "https://github.com/finbud2024/Finbud",
        imageList: [
            {
                image: findbud1,
                legend: "Landing Page"

            },
            {
                image: findbud2,
                legend: "Login and Signup Page"

            },
            {
                image: findbud3,
                legend: "Chatbot Interface"

            },
            {
                image: findbud4,
                legend: "NVDIA Chart Analysis"
            },
            {
                image: findbud5,
                legend: "NVDIA Candle Stick Chart"
            },
            {
                image: findbud6,
                legend: "AI Chatbot Analysis"
            },
            {
                image: findbud7,
                legend: "AI Chatbot Analysis"
            },
            {
                image: findbud8,
                legend: "Stock Details Page"
            }
        ],
        deployedURL: "https://finbud.ai",
        category: "Full Stack / AI",
        techStack: [
            "NodeJS",
            "VueJS",
            "OpenAI API",
            "Stripe API",
            "JWT Authentication",
            "Netlify Serverless Functions",
            "OAuth 2.0",
            "ExpressJS",
            "MongoDB",
            "Alpha Vantage API"
        ]
    },
]

export {
    contactsList, socialList, navBarList, educationList, experienceList,
    serviceList, TestimonialsList, RecommendationLettersURL, toolBox,
    projectList
};