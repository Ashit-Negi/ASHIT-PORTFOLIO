import React from "react";
import "../cssFile/home.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import image from "../assets/projectImages/negi1111.jpg";
import image2 from "../assets/projectImages/ashit.png";

function Home() {
  return (
    <section id="home" className="home-section">
      <Container>
        <Row>
          {/* Profile Image Section */}
          <Col md={6} className="image-container">
            <img src={image2} alt="Ashit-Negi" className="profile-img" />
          </Col>

          {/* Introduction Section */}
          <Col md={6} className="intro-container">
            <h3>
              Hello,I'm <strong>Ashit Negi</strong>
            </h3>

            <h3>
              and I'm a
              <strong>
                <TypeAnimation
                  sequence={[
                    "Full-Stack Developer",
                    2000,
                    "React Enthusiast",
                    2000,
                    "Problem Solver",
                    2000,
                  ]}
                  wrapper="h2"
                  repeat={Infinity}
                />
              </strong>
            </h3>

            <p>
              Passionate about building interactive and responsive web
              applications.
            </p>

            {/* Buttons */}
            <div className="btn-group">
              <Button
                variant="primary"
                href="/ASHIT-PORTFOLIO/AshitNegi-Resume.pdf"
                download
              >
                My Resume
              </Button>
              <Button
                variant="outline-light"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Media Icons */}
            <div className="social-icons">
              <a
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ashit-negi-647866330/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/negiashit/?next=%2F&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
