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
            <h1>Welcome ...About Me</h1>
            <p>
              I’m a creative, collaborative, and thoughtful web developer with a
              diverse range of experiences including financial planning, product
              development, digital marketing, and retail management. My past
              experiences have taught me to combine strong aesthetic vision with
              the practical application of technology stacks to produce
              applications that are scalable, efficient, and visually
              stimulating. As a lifetime learner I look forward broadening my
              skill sets with each project I take on and always remain open to
              new challenges.
            </p>
            <div className="profile-icons">
              <a href="https://github.com/snsebro" target="_blank">
                <GithubIcon className="profile-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/shaynesebro/"
                target="_blank"
              >
                <LinkedinIcon className="profile-icon" />
              </a>
              <a
                href="https://drive.google.com/file/d/1KPecR7iC6xQQQXaInQIQ7lyvAjDZ8kKx/view?usp=sharing"
                target="_blank"
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
