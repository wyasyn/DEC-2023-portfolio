import { BsDatabase } from "react-icons/bs";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdComputer, MdGraphicEq, MdMouse } from "react-icons/md";
const myEmail = process.env.MY_EMAIL;
const myPhone = process.env.MY_PHONE;
export const linkData = [
    {
        name: "home",
        url: "/",
    },
    {
        name: "about",
        url: "/about",
    },
    {
        name: "projects",
        url: "/projects",
    },
    {
        name: "blog",
        url: "/blog",
    },
    {
        name: "contact",
        url: "/contact",
    },
    {
        name: "admin",
        url: "/admin",
    },
];

export const socialsdata = [
    {
        name: "github",
        icons: <FaGithub />,
        url: "https://github.com/wyasyn",
    },
    {
        name: "WhatsApp",
        icons: <FaWhatsapp />,
        url: `https://wa.me/${myPhone}`,
    },
    {
        name: "linkedin",
        icons: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/yasin-walum-01b18295/",
    },
    {
        name: "Email",
        icons: <FaEnvelope />,
        url: `mailto:${myEmail}`,
    },
];

export const ServicesData = [
    {
        icon: <MdComputer />,
        title: "Web Development",
        line: "Design, develop",
        describe: "Design, develop, and maintain web applications and systems",
    },
    {
        icon: <MdGraphicEq />,
        title: "Machine Learning",
        line: "Manage, maintain",
        describe: "Manage and maintain computer systems, networks, and servers",
    },
    {
        icon: <BsDatabase />,
        title: "Database",
        line: "Implement, store",
        describe:
            "Design, implement, and maintain databases for storing and retrieving data efficiently",
    },
    {
        icon: <MdMouse />,
        line: "Design, develop",
        title: "Networks, servers",
        describe: "Manage and maintain computer systems, networks, and servers",
    },
];

export const aboutInfor = {
    title: "About Me",
    intro: "Who am I.",
    describe:
        "👋 Hello! I'm, a passionate web developer and data analyst with a love for transforming data into meaningful insights and crafting web experiences that leave a lasting impression. With a blend of creativity and analytical prowess, I bring a unique perspective to every project I undertake.",
};
export const projectInfor = {
    title: "Projects",
    intro: "Selected Projects",
    describe:
        "I am excited to showcase my skills and share my journey as I continue to explore and innovate in the ever-evolving world of front-end development.",
};
export const skillsInfor = {
    title: "My skills",
    intro: "Why choose me.",
    describe:
        "I thrive on transforming ideas and designs into interactive and user-friendly web experiences. From responsive layouts to intuitive user interfaces, I take pride in crafting seamless, visually appealing, and engaging websites.",
};

export const BlogTitle = {
    title: "Insights Unveiled",
    sub: "My Blogs",
    description:
        "Explore captivating insights, practical tips, and personal anecdotes that illuminate the path in web development",
};

export const skillsData = [
    {
        skill: "JavaScript",
        percent: 98,
    },
    {
        skill: "php",
        percent: 85,
    },
    {
        skill: "python",
        percent: 90,
    },
    {
        skill: "css",
        percent: 100,
    },
    {
        skill: "sql",
        percent: 90,
    },
    {
        skill: "node and & it's frameworks",
        percent: 90,
    },
];
