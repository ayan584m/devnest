import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaArrowUp,
} from "react-icons/fa";

import "./style/Footer_style.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-top">

                    {/* Brand */}
                    <div className="footer-brand">
                        <h2>YourCompany</h2>

                        <p>
                            We create modern digital solutions that help
                            businesses grow, connect, and succeed.
                        </p>

                        <div className="footer-social">

                            <a href="#" aria-label="Facebook">
                                <FaFacebookF />
                            </a>

                            <a href="#" aria-label="Instagram">
                                <FaInstagram />
                            </a>

                            <a href="#" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>

                            <a href="#" aria-label="GitHub">
                                <FaGithub />
                            </a>

                        </div>
                    </div>


                    {/* Quick Links */}
                    <div className="footer-column">

                        <h3>Quick Links</h3>

                        <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>

                            <li>
                                <a href="#about">About</a>
                            </li>

                            <li>
                                <a href="#services">Services</a>
                            </li>

                            <li>
                                <a href="#projects">Projects</a>
                            </li>

                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>

                    </div>


                    {/* Services */}
                    <div className="footer-column">

                        <h3>Services</h3>

                        <ul>
                            <li>
                                <a href="#services">
                                    Web Development
                                </a>
                            </li>

                            <li>
                                <a href="#services">
                                    Mobile App Development
                                </a>
                            </li>

                            <li>
                                <a href="#services">
                                    E-Commerce
                                </a>
                            </li>

                            <li>
                                <a href="#services">
                                    UI/UX Design
                                </a>
                            </li>

                            <li>
                                <a href="#services">
                                    Digital Marketing
                                </a>
                            </li>
                        </ul>

                    </div>


                    {/* Contact */}
                    <div className="footer-column footer-contact">

                        <h3>Contact</h3>

                        <p>
                            Karachi, Pakistan
                        </p>

                        <a href="mailto:your@email.com">
                            your@email.com
                        </a>

                        <a href="tel:+923000000000">
                            +92 300 0000000
                        </a>

                    </div>

                </div>


                {/* Bottom */}
                <div className="footer-bottom">

                    <p>
                        © {currentYear} YourCompany. All Rights Reserved.
                    </p>

                    <a
                        href="#home"
                        className="back-to-top"
                        aria-label="Back to top"
                    >
                        <FaArrowUp />
                    </a>

                </div>

            </div>

        </footer>
    );
};

export default Footer;