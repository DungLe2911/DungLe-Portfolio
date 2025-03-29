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

const educationList = [
    {
        period: "2018 - 2021",
        school: "Washington State University",
        degree: "Bachelor of Science in Computer Science",
        GPA: 3.6
    },
    {
        period: "2015 - 2018",
        school: "Tacoma Community College",
        degree: "Associate of Science in Computer Science",
        GPA: 3.6
    }
]

const experienceList = [
    {
        company: "South Georgia Pecan Co.",
        time: "Dec 2022 - Present",
        title: "Middle Room Inventory Control Specialist and Data Analysis Engineer",
        bulletPoints:[
            "Developed data visualization tools using Power BI and Excel for production monitoring and tracking",
            "Executed data processing for better accuracy on daily production report",
            "Diagnosed and resolved machines malfunctions to ensure operational efficiency",
            "Traced product lifecycle from initial processing to final product output upon request",
            "Managed and organized daily product logs for future accessibility",
            "Collected and analyzed sample requests for potential customers",
            "Inspected and validate incoming product from other facilities to ensure compliance with processing standard"
        ]
    },
    {
        company: "Silicon Valley Bank via Beaconfire",
        time: "Feb 2022 - Dec 2022",
        title: "Software Developer Engineer",
        bulletPoints:[
            "Worked with both NoSQL Database (MongoDB) and SQL Database(MySQL) to store and retrieve data",
            "Implemented Microservice architecture on the applications into components to process requests",
            "Integrated Hibernate on each of the core services to store and retrieved data from database",
            "Used Feign Client or RestTemplate to achieve communicate between core services",
            "Followed RESTful API guidelines on backend application development",
            "Tested each of the unit of backend application with JUnit and Mockito, and JaCoCo for code coverage",
            "Utilized SpringBoot libraries such Spring Security, Cloud, AOP, etc. and as well as maven for dependencies",
            "Applied different design pattern such as Singleton, Factory, Observer, Builder, Proxy"
        ]
    },
    {
        company: "F5 Network Internship",
        time: "Jan 2021 - Dec 2021",
        title: "Front End Developer",
        bulletPoints:[
            "Built a frontend for capture the flag application that aims toward late middle school and high schoolers",
            "Developed the frontend application using HTML, CSS, and Javascript  with ReactJS Framework for a SPA",
            "Tested the interaction between the elements by using TestCafe and Playwright",
            "Collaborated with the team members on the project through GitHub",
            "Deployed the application at ctf.cyberliteracyforall.com and team information at www.cyberliteracyforall.com",
            "Integrated the frontend application with a terminal that runs in a Kubernetes cluster",
            "Utilized Axios libraries for fetch data and send request between frontend and backend application",
            "Applied JWT guideline along with Oauth on the Frontend application for user Single Sign On (SSO)"
        ]
    },
    {
        company: "Washington State University - HiPDAC Reseach Group - Prof. Dingwen Tao",
        time: "Jan 2021 - Jan 2022",
        title: "Research Assistant",
        bulletPoints:[
            "Benchmarked different CNN models under different environment setting such as single/multi-threading, or batch size",
            "Performed matrix multiplication using already existed library such as OpenBLAS, BLIS, SpGeMM",
            "Analyzed the result based on inference time, memory usage from those libraries and looked for room for optimization",
            "Set up environment to run the codes that is published on academic papers",
            "Implemented additional C/C++ code that helps with generating new matrices for the benchmarking the CNN models",
            "Project and team information can be found at dingwentao.com"
        ]
    },
    {
        company: "Washington State University",
        time: "Aug 2021 - Dec 2021",
        title: "Undergrate Teaching Assistant",
        bulletPoints:[
            "Mentored around 17 students for a college semester",
            "Supervised a practical labs for a college semester",
            "Provided feedback and guidance for each lab section and lecture misunderstanding for students",
            "Helped explaining lecture concepts and materials to students that have a hard time understanding",
        ]
    },
]

const serviceList=[
    {
        title: "Web Design",
        text: "Architecting high-performance systems using diverse design patterns for optimal functionality",
        icon: "design.svg", 
    },
    {
        title: "Front End Development",
        text: "Professional development of responsive web applications",
        icon:"dev.svg", 
    },
    {
        title:"Backend Development",
        text: "High-quality development of consistent, scalable, and secure of backend systems",
        icon:"server.svg", 
    },
    {
        title: "Machin Learning Engineer",
        text: "Designing, training, and optimizing AI models to drive intelligent decision-making and automation",
        icon:"AI.svg", 
    },
]
export {contactsList, socialList, navBarList, educationList, experienceList, serviceList};