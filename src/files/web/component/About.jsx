import React from "react";
import "./style/About_style.css";
import { motion } from "framer-motion";

import {
    FaBuilding,
    FaBullseye,
    FaRocket,
    FaArrowRight,
} from "react-icons/fa";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">

                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                >
                    <h2>About Us</h2>

                    <p>
                        Building Modern Digital Solutions for Growing Businesses
                    </p>
                </motion.div>

                <div className="about-container">

                    {/* LEFT */}

                    <motion.div
                        className="about-left"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8 }}
                    >

                        <span className="about-badge">

                            <FaBuilding />

                            DevNest Technologies

                        </span>

                        <h2>
                            Empowering Businesses Through Modern Technology
                        </h2>

                        <p>
                            DevNest Technologies is a growing software company committed
                            to delivering innovative, reliable, and high-quality digital
                            solutions. We specialize in custom web development,
                            mobile applications, branding, UI/UX design, and digital
                            marketing services tailored to business needs.
                        </p>

                        <p>
                            Our mission is simple — to help startups and businesses
                            establish a strong online presence through scalable,
                            secure, and user-friendly digital products.
                        </p>

                        <button className="about-btn">

                            Learn More

                            <FaArrowRight />

                        </button>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        className="about-right"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8 }}
                    >

                        {/* Mission */}

                        <motion.div
                            className="about-card"
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                        >

                            <motion.div
                                className="about-icon"
                                whileHover={{
                                    rotate: 360,
                                    scale: 1.1,
                                }}
                                transition={{ duration: .6 }}
                            >

                                <FaBullseye />

                            </motion.div>

                            <h3>Our Mission</h3>

                            <p>
                                To deliver innovative, affordable, and scalable
                                technology solutions that help businesses grow
                                with confidence.
                            </p>

                        </motion.div>

                        {/* Vision */}

                        <motion.div
                            className="about-card"
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                        >

                            <motion.div
                                className="about-icon"
                                whileHover={{
                                    rotate: 360,
                                    scale: 1.1,
                                }}
                                transition={{ duration: .6 }}
                            >

                                <FaRocket />

                            </motion.div>

                            <h3>Our Vision</h3>

                            <p>
                                To become a trusted technology partner by
                                delivering creative, future-ready, and
                                business-focused digital solutions.
                            </p>

                        </motion.div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default About;