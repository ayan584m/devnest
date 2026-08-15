import React from "react";
import "./style/Services_style.css";
import services from '../data/Services.js'

// import {
//     FaCode,
//     FaMobileAlt,
//     FaShoppingCart,
//     FaLaptopCode,
//     FaPaintBrush,
//     FaBullhorn,
//     FaYoutube,
//     FaPalette,
// } from "react-icons/fa";



// const services = [
//     {
//         icon: <FaCode />,
//         title: "Custom Web Development",
//         desc: "Modern, fast, and responsive websites tailored to your business needs.",
//     },
//     {
//         icon: <FaMobileAlt />,
//         title: "Mobile App Development",
//         desc: "High-performance Android and iOS applications with modern UI.",
//     },
//     {
//         icon: <FaShoppingCart />,
//         title: "E-Commerce Solutions",
//         desc: "Complete online stores with secure payment integration.",
//     },
//     {
//         icon: <FaLaptopCode />,
//         title: "Custom Software Solutions",
//         desc: "Business software built to improve workflow and productivity.",
//     },
//     {
//         icon: <FaPaintBrush />,
//         title: "UI/UX Design",
//         desc: "Clean, user-friendly, and engaging interface designs.",
//     },
//     {
//         icon: <FaBullhorn />,
//         title: "Social Media Marketing",
//         desc: "Facebook & Instagram advertising to grow your business.",
//     },
//     {
//         icon: <FaYoutube />,
//         title: "YouTube Thumbnail Design",
//         desc: "Creative thumbnails that increase clicks and engagement.",
//     },
//     {
//         icon: <FaPalette />,
//         title: "Brand Identity & Logo Design",
//         desc: "Professional logo design and complete branding solutions.",
//     },
// ];

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">

                <div className="section-title">
                    <h2>Our Services</h2>
                    <p>
                        We deliver innovative digital solutions that help businesses grow
                        and succeed in the modern world.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">{service.icon}</div>

                            <h3>{service.title}</h3>

                            <p>{service.desc}</p>

                            <button className="service-btn">
                                Learn More →
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;