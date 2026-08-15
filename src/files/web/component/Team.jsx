import React from "react";
import { motion } from "framer-motion";
import {
    FaLinkedinIn,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa";
import "./style/Team_style.css";
import teamData from "../data/Team"

// const teamData = [
//     {
//         id: 1,
//         name: "Muhammad Ayan",
//         role: "MERN Stack Developer",
//         image: "/assets/img/team1.jpg",
//         description:
//             "Focused on building modern, scalable and responsive web applications.",
//         linkedin: "",
//         github: "",
//         email: "",
//     },
//     {
//         id: 2,
//         name: "Team Member",
//         role: "UI/UX Designer",
//         image: "/assets/img/team2.jpg",
//         description:
//             "Creates clean, intuitive and engaging digital experiences.",
//         linkedin: "",
//         github: "",
//         email: "",
//     },
//     {
//         id: 3,
//         name: "Team Member",
//         role: "Full Stack Developer",
//         image: "/assets/img/team3.jpg",
//         description:
//             "Develops reliable applications with modern frontend and backend technologies.",
//         linkedin: "",
//         github: "",
//         email: "",
//     },
// ];

const Team = () => {
    return (
        <section className="team" id="team">

            <div className="container">

                {/* Section Heading */}
                <motion.div
                    className="team-heading"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="team-subtitle">
                        OUR TEAM
                    </span>

                    <h2>
                        Meet Our Team
                    </h2>

                    <p>
                        A passionate team focused on creating modern,
                        reliable and impactful digital solutions.
                    </p>
                </motion.div>


                {/* Team Grid */}
                <div className="team-grid">

                    {teamData.map((member, index) => {

                        const hasLinkedin = Boolean(member.linkedin);
                        const hasGithub = Boolean(member.github);
                        const hasEmail = Boolean(member.email);

                        return (
                            <motion.div
                                className="team-card"
                                key={member.id}
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                            >

                                {/* Image */}
                                <div className="team-image">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                    />
                                </div>


                                {/* Content */}
                                <div className="team-content">

                                    <h3>
                                        {member.name}
                                    </h3>

                                    <span className="team-role">
                                        {member.role}
                                    </span>

                                    <p>
                                        {member.description}
                                    </p>


                                    {/* Social Links */}
                                    <div className="team-social">

                                        {hasLinkedin ? (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="LinkedIn"
                                            >
                                                <FaLinkedinIn />
                                            </a>
                                        ) : (
                                            <span className="social-disabled">
                                                <FaLinkedinIn />
                                            </span>
                                        )}


                                        {hasGithub ? (
                                            <a
                                                href={member.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="GitHub"
                                            >
                                                <FaGithub />
                                            </a>
                                        ) : (
                                            <span className="social-disabled">
                                                <FaGithub />
                                            </span>
                                        )}


                                        {hasEmail ? (
                                            <a
                                                href={`mailto:${member.email}`}
                                                aria-label="Email"
                                            >
                                                <FaEnvelope />
                                            </a>
                                        ) : (
                                            <span className="social-disabled">
                                                <FaEnvelope />
                                            </span>
                                        )}

                                    </div>

                                </div>

                            </motion.div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default Team;