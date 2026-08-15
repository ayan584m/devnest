import React, { useRef } from 'react';
import "./style/Hero_style.css";

const Hero = () => {
    const panelRef = useRef(null);

    // Interactive 3D tilt — panel follows the cursor within the visual area
    const handleMouseMove = (e) => {
        const el = panelRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 18;
        const rotateX = ((y / rect.height) - 0.5) * -18;
        el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    };

    const handleMouseLeave = () => {
        const el = panelRef.current;
        if (!el) return;
        el.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`;
    };

    return (
        <section className="hero" id="home">
            <div className="hero-bg-glow"></div>

            <div className="hero-container">
                <div className="hero-content">
                    <span className="hero-eyebrow">
                        <span className="dot"></span> Software House — Karachi
                    </span>

                    <h1 className="hero-title">
                        We Build Software <br />
                        That <span className="grad-text">Scales With You</span>
                    </h1>

                    <p className="hero-intro">
                        DevNest Technologies designs and develops websites, mobile apps,
                        and custom platforms for startups and growing businesses —
                        from the first line of code to production.
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">
                            Get a Free Quote
                        </a>
                        <a href="#projects" className="btn btn-outline">
                            View Portfolio
                        </a>
                    </div>
                </div>

                {/* Right side — animated 3D code panel */}
                <div
                    className="hero-visual"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="floating-badge badge-react">⚛ React</div>
                    <div className="floating-badge badge-node">Node.js</div>
                    <div className="floating-badge badge-db">MongoDB</div>

                    <div className="code-panel" ref={panelRef}>
                        <div className="code-panel-bar">
                            <span className="dot-red"></span>
                            <span className="dot-yellow"></span>
                            <span className="dot-green"></span>
                            <span className="code-panel-name">devnest.js</span>
                        </div>
                        <div className="code-panel-body">
                            <p><span className="c-comment">// devnest / build.js</span></p>
                            <p><span className="c-keyword">const</span> <span className="c-var">product</span> = <span className="c-keyword">await</span> devnest.build({'{'}</p>
                            <p className="indent"><span className="c-prop">design:</span> <span className="c-string">"pixel-perfect"</span>,</p>
                            <p className="indent"><span className="c-prop">code:</span> <span className="c-string">"clean"</span>,</p>
                            <p className="indent"><span className="c-prop">delivery:</span> <span className="c-string">"on-time"</span></p>
                            <p>{'}'});</p>
                            <p>&nbsp;</p>
                            <p><span className="c-comment">// status</span></p>
                            <p><span className="c-prop">deployment:</span> <span className="c-string">"live"</span><span className="cursor">|</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
