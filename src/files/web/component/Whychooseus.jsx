import React from "react";
import "./style/Whychooseus_style.css";
import { motion } from "framer-motion";

import {
    FaUsers,
    FaClock,
    FaHeadset,
    FaDollarSign,
} from "react-icons/fa";

const chooseData = [
    {
        icon: <FaUsers />,
        title: "Professional Team",
        desc: "Our skilled team delivers modern digital solutions focused on quality and innovation.",
    },
    {
        icon: <FaClock />,
        title: "On-Time Delivery",
        desc: "We follow an efficient workflow to ensure projects are completed on schedule.",
    },
    {
        icon: <FaHeadset />,
        title: "Dedicated Support",
        desc: "Reliable communication and support throughout every stage of your project.",
    },
    {
        icon: <FaDollarSign />,
        title: "Cost-Effective Solutions",
        desc: "Premium quality services at competitive pricing for startups and businesses.",
    },
];

const Whychooseus = () => {
    return (
        <section className="choose" id="whychooseus">
            <div className="container">

                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Why Choose Us</h2>
                    <p>
                        We combine creativity, technology, and commitment to deliver
                        reliable digital solutions that help businesses grow.
                    </p>
                </motion.div>

                <div className="choose-grid">

                    {chooseData.map((item, index) => (
                        <motion.div
                            className="choose-card"
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                        >
                            <div className="choose-icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.desc}</p>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Whychooseus;