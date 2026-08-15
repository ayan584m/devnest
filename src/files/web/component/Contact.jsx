import React from "react";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaPaperPlane,
} from "react-icons/fa";

import "./style/Contact_style.css";

const Contact = () => {
    return (
        <section className="contact" id="contact">

            <div className="container">

                {/* Heading */}
                <div className="section-title contact-title">
                    <h2>Contact Us</h2>

                    <p>
                        Have a project in mind? Get in touch with us and
                        let's build something amazing together.
                    </p>
                </div>


                <div className="contact-wrapper">

                    {/* Contact Information */}
                    <div className="contact-info">

                        <h3>
                            Let's Talk
                        </h3>

                        <p>
                            We're always happy to discuss new projects,
                            ideas, and opportunities. Send us a message
                            and we'll get back to you as soon as possible.
                        </p>


                        <div className="contact-details">

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <span>Email</span>
                                    <a href="mailto:your@email.com">
                                        your@email.com
                                    </a>
                                </div>
                            </div>


                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FaPhoneAlt />
                                </div>

                                <div>
                                    <span>Phone</span>
                                    <a href="tel:+923000000000">
                                        +92 300 0000000
                                    </a>
                                </div>
                            </div>


                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <span>Location</span>
                                    <p>
                                        Karachi, Pakistan
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>


                    {/* Contact Form */}
                    <div className="contact-form-wrapper">

                        <form
                            className="contact-form"
                            action="https://formspree.io/f/YOUR_FORM_ID"
                            method="POST"
                        >

                            <div className="form-row">

                                <div className="form-group">
                                    <label htmlFor="name">
                                        Your Name
                                    </label>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="email">
                                        Your Email
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                            </div>


                            <div className="form-group">
                                <label htmlFor="subject">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Enter subject"
                                    required
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="message">
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    placeholder="Write your message..."
                                    required
                                ></textarea>
                            </div>


                            <button
                                type="submit"
                                className="contact-submit"
                            >
                                <span>Send Message</span>

                                <FaPaperPlane />
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Contact;