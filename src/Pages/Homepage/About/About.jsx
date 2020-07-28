import React from "react";
import Header from "../../../Components/Header/Header";
import ParticleGraphic from "../../../Components/ParticleGraphic/ParticleGraphic";
import { ReactComponent as GithubIcon } from "../../../Assets/github-original.svg";
import { ReactComponent as LinkedinIcon } from "../../../Assets/linkedin-original.svg";
import { ReactComponent as ResumeIcon } from "../../../Assets/resume.svg";
import "./About.css";

export default function About() {
  return (
    <div className="container">
      <div className="left">
        <h1>Shayne Sebro Software Engineer</h1>
      </div>
      <div className="middle">
        <Header />

        <div className="content">
          <div className="constellation">
            <span className="circle"></span>
            <ParticleGraphic />
          </div>
          <div className="message">
            <h1>About Me</h1>
            <p>
              As a software engineer with a collaborative nature, analytical
              perspective, and strong aesthetic vision I find it important to
              remain adaptable to learning and implementing multiple programming
              frameworks in my own practice and enjoy taking on new projects
              that allow me to do so.
            </p>
            <p>
              Feel free to visit the links below to learn more, or check out
              some of my projects{" "}
              <a href="/projects">
                <span className="here">here</span>
              </a>
              !
            </p>
            <div className="profile-icons">
              <a
                href="https://github.com/snsebro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="profile-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/shaynesebro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="profile-icon" />
              </a>
              <a
                href="https://drive.google.com/file/d/1FGc0C0jJnQci26yM0QBUXo-LNzz6uC7Z/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ResumeIcon className="profile-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}
