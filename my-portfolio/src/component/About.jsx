import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../cssFile/about.scss";
import "font-awesome/css/font-awesome.min.css";
import ashitPhoto from "../assets/projectImages/ashitPhot.jpg";

function About() {
  return (
    <section id="about" className="about">
      <Container className="my-5">
        <h2>About Me</h2>
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <img src={ashitPhoto} alt="Ashit Negi" className="about-image" />
          </Col>
          <Col md={8}>
            <p className="fade-in delay-1">
              Hi, I'm Ashit Negi, a passionate full-stack developer with
              expertise in both front-end and back-end technologies. I love
              building interactive and responsive websites and applications. I'm
              constantly learning new technologies to stay up-to-date with
              industry trends. In my free time, I enjoy solving problems,
              exploring new coding challenge.
            </p>
            <p className="fade-in delay 2">
              <strong>My Journey:</strong> I started coding at late age,
              initially exploring HTML,CSS,React.js. Over the years, I
              transitioned to full-stack development and have worked on numerous
              projects, learning new frameworks and tools with every challenge I
              face.
            </p>
            <p className="fade-in delay 3">
              <strong>Technical Skills:</strong> React, Node.js, MongoDB,
              Express, JavaScript, HTML, CSS, etc.
            </p>
            <p className="fade-in delay 4">
              <strong>Hobbies:</strong> In my free time, I enjoy photography,
              traveling, hiking, and learning about Life Purpose.
            </p>
            <p className="fade-in delay 5">
              <strong>My Philosophy:</strong> I believe in writing clean,
              maintainable code that not only works but is scalable and
              efficient. I'm passionate about creating solutions that provide
              real value to users.
            </p>
            {/* <p>
              If you'd like more detailed information about my education feel
              free to
              <a href="/Ashit-Resume.pdf" download="Ashit-Resume.pdf">
                My Resume
              </a>
              //
              .
            </p> */}
            <div className="social-icons fade-in delay-6">
              <a
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-github"
                  style={{ fontSize: "30px", marginRight: "10px" }}
                ></i>
              </a>
              <a
                href="https://www.instagram.com/negiashit/?next=%2F&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-instagram"
                  style={{ fontSize: "30px", marginRight: "10px" }}
                ></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ashit-negi-647866330/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" style={{ fontSize: "30px" }}></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
