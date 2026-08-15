import React from "react";
import "./style/Techstack_style.css";
import { motion } from "framer-motion";

import {
    FaReact,
    FaNodeJs,
    FaAws,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiExpress,
    SiMongodb,
    SiNextdotjs,
    SiTailwindcss,
    SiFirebase,
    SiBootstrap,
} from "react-icons/si";

const techData = [
    {
        icon: <FaReact />,
        title: "React.js",
        desc: "Build fast, responsive and modern user interfaces.",
    },
    {
        icon: <FaNodeJs />,
        title: "Node.js",
        desc: "Scalable backend development with JavaScript runtime.",
    },
    {
        icon: <SiExpress />,
        title: "Express.js",
        desc: "Powerful REST APIs and backend architecture.",
    },
    {
        icon: <SiMongodb />,
        title: "MongoDB",
        desc: "Flexible NoSQL database for modern applications.",
    },
    {
        icon: <SiNextdotjs />,
        title: "Next.js",
        desc: "SEO-friendly and high-performance React framework.",
    },
    {
        icon: <SiBootstrap />,
        title: "Bootstrap",
        desc: "Responsive and mobile-first UI development.",
    },
    {
        icon: <SiTailwindcss />,
        title: "Tailwind CSS",
        desc: "Utility-first CSS framework for rapid UI development.",
    },
    {
        icon: <SiFirebase />,
        title: "Firebase",
        desc: "Authentication, database, storage and hosting.",
    },
    {
        icon: <FaAws />,
        title: "AWS",
        desc: "Reliable cloud hosting and deployment solutions.",
    },
    {
        icon: <FaGitAlt />,
        title: "Git & GitHub",
        desc: "Version control and collaborative development.",
    },
];

const TechStack = () => {
    return (
        <section className="tech-stack" id="techstack">

            <div className="container">

                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Our Tech Stack</h2>

                    <p>
                        We use modern technologies to build secure, scalable,
                        and high-performance digital solutions.
                    </p>
                </motion.div>

                <div className="tech-grid">

                    {techData.map((tech, index) => (

                        <motion.div
                            className="tech-card"
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                        >

                            <div className="tech-icon">
                                {tech.icon}
                            </div>

                            <h3>{tech.title}</h3>

                            <p>{tech.desc}</p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default TechStack;