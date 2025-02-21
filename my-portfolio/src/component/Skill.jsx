import React from "react";
import "../cssFile/skills.scss";
import htmlImage from "../assets/projectImages/html.jpg";
import JavaScript from "../assets/projectImages/javascript.png";
import Bootstrao from "../assets/projectImages/bootstrap.jpeg";
import CSSIMAGE from "../assets/projectImages/cssimage.jpg";
import JWT from "../assets/projectImages/jwt.png";
import Mongodb from "../assets/projectImages/mongodb.png";
import NodeJs from "../assets/projectImages/nodejs.png";
import Postman from "../assets/projectImages/postman.png";
import ReactVite from "../assets/projectImages/react-vite.png";
import TailwindCSS from "../assets/projectImages/tailwindcss.png";
import VScode from "../assets/projectImages/vscode.png";
import Github from "../assets/projectImages/github.png";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {/* Front-End Section */}
        <div className="frontend-skills">
          <h3>Front-end</h3>
          <div className="skills-list">
            <div className="skill">
              <img src={htmlImage} alt="HTML" />
              <span className="tooltip">HTML</span>
            </div>
            <div className="skill">
              <img src={CSSIMAGE} alt="CSS" />
              <span className="tooltip">CSS3</span>
            </div>
            <div className="skill">
              <img src={JavaScript} alt="JavaScript" />
              <span className="tooltip">JavaScript</span>
            </div>
            <div className="skill">
              <img src={ReactVite} alt="React.js+vite" />
              <span className="tooltip">React.js + Vite</span>
            </div>
            <div className="skill">
              <img src={TailwindCSS} alt="Tailwindcss" />
              <span className="tooltip">TailwindCss</span>
            </div>
            <div className="skill">
              <img src={Bootstrao} alt="BootStrap" />
              <span className="tooltip">BootStrap React</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Back-End Section */}
        <div className="backend-skills">
          <h3>Back-end</h3>
          <div className="skills-list">
            <div className="skill">
              <img src={NodeJs} alt="Node.js" />
              <span className="tooltip">Node.js</span>
            </div>
            <div className="skill">
              <img src={Mongodb} alt="MongoDB" />
              <span className="tooltip">MongoDB</span>
            </div>
            <div className="skill">
              <img src={Postman} alt="Postman" />
              <span className="tooltip">Postman</span>
            </div>
            <div className="skill">
              <img src={JWT} alt="jwt" />
              <span className="tooltip">JWT</span>
            </div>
            <div className="skill">
              <img src={VScode} alt="vscode" />
              <span className="tooltip">VSCode</span>
            </div>
            <div className="skill">
              <img src={Github} alt="Github" />
              <span className="tooltip">GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
