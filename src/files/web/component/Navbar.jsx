import React, { useState, useEffect } from 'react';
import "./style/Navbar_style.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll effect for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo with Image */}
                <a href="#" className="logo">
                    <img
                        src="/assets/img/logo.png"
                        alt="DevNest Technologies"
                        className="logo-img"
                    />
                    <span className="logo-text">
                        DevNest <span className="sub">Technologies</span>
                    </span>
                </a>

                {/* Navigation Links */}
                <nav>
                    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        {/* <li><a href="#whychooseus">Why Choose Us</a></li> */}
                        {/* <li><a href="#techstack">Techstack</a></li> */}
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                {/* Right Side */}
                <div className="nav-actions">
                    <a href="#contact" className="btn btn-primary">Get a Quote</a>
                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;