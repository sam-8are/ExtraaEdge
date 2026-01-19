import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const navigate = useNavigate();

  const navItems = ["Home", "Features", "Roles", "Tech Stack", "Contact"];

  // Scroll to section when nav button clicked
  const handleNavClick = (item) => {
    setActiveNav(item);
    const section = document.getElementById(item.toLowerCase());
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // Highlight nav item on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            current = item.toLowerCase();
          }
        }
      });

      setActiveNav(
        navItems.find((item) => item.toLowerCase() === current) || "Home"
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing-container">
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="logo-section">
          <div className="logo-box">E</div>
          <div className="logo-text">
            <h1>ExtraaEdge</h1>
            <p>Lead Management & Telecalling CRM System</p>
          </div>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-btn ${activeNav === item ? "active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
          <button
            className="btn-get-started-nav"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>
            Streamline Your Lead Management with <span>ExtraaEdge</span>
          </h2>
          <p>
            A <strong>MERN Stack CRM Solution</strong> for Educational
            Institutes & Call Centers
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => handleNavClick("Features")}
            >
              Learn More
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="mock-dashboard">
            <div className="mock-sidebar"></div>
            <div className="mock-content">
              <div className="mock-bars">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="mock-circle"></div>
            </div>
          </div>
        </div>
      </section>

      
      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    className={`footer-link ${
                      activeNav === item ? "active" : ""
                    }`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <p>info@extraaedge.com</p>
            <p>+1 234 567 850</p>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <p className="social-text">
              Facebook · Twitter · LinkedIn · Instagram
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2024 ExtraaEdge. All Rights Reserved | Privacy Policy | Terms of
          Service
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
