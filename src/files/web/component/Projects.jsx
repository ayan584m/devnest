import React from "react";
import "./style/Projects_style.css";
import { motion } from "framer-motion";
import { FaGlobe, FaExternalLinkAlt } from "react-icons/fa";
import projectData from "../data/Projectdata";

const Projects = () => {
    return (
        <section className="projects" id="projects">

            <div className="container">

                {/* Section Heading */}
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Projects</h2>

                    <p>
                        Explore some of our recent projects built with modern
                        technologies and a strong focus on quality and user experience.
                    </p>
                </motion.div>


                {/* Projects Grid */}
                <div className="projects-grid">

                    {projectData.map((project, index) => {

                        const hasLiveDemo = Boolean(project.liveDemo);
                        const hasAppLink = Boolean(project.applink);

                        return (
                            <motion.article
                                className="project-card"
                                key={project.id}
                                initial={{
                                    opacity: 0,
                                    y: 50
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.15
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08
                                }}
                                whileHover={{
                                    y: -8
                                }}
                            >

                                {/* Project Image */}
                                <div className="project-image">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />

                                </div>


                                {/* Project Content */}
                                <div className="project-content">

                                    <div className="project-info">

                                        {/* Category */}
                                        <span className="project-category">
                                            {project.category}
                                        </span>


                                        {/* Title */}
                                        <h3>
                                            {project.title}
                                        </h3>


                                        {/* Description */}
                                        <p>
                                            {project.description}
                                        </p>


                                        {/* Technologies */}
                                        <div className="project-tech">

                                            {project.technologies.map(
                                                (technology, techIndex) => (
                                                    <span key={techIndex}>
                                                        {technology}
                                                    </span>
                                                )
                                            )}

                                        </div>

                                    </div>


                                    {/* Buttons */}
                                    <div className="project-buttons">

                                        {/* Live Demo */}
                                        {hasLiveDemo && (
                                            <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="demo-btn"
                                            >
                                                <FaGlobe />

                                                <span>
                                                    Live Demo
                                                </span>
                                            </a>
                                        )}


                                        {/* App Link */}
                                        {hasAppLink && (
                                            <a
                                                href={project.applink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="demo-btn app-btn"
                                            >
                                                <FaExternalLinkAlt />

                                                <span>
                                                    App
                                                </span>
                                            </a>
                                        )}


                                        {/* No Links */}
                                        {!hasLiveDemo && !hasAppLink && (
                                            <button
                                                type="button"
                                                className="demo-btn disabled-btn"
                                                disabled
                                            >
                                                <FaGlobe />

                                                <span>
                                                    Coming Soon
                                                </span>
                                            </button>
                                        )}

                                    </div>

                                </div>

                            </motion.article>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default Projects;