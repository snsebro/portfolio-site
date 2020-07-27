import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import ParticleGraphic from "../../Components/ParticleGraphic/ParticleGraphic";
import "./Homepage.css";

export default class Homepage extends Component {
  render() {
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
              <h1>Welcome</h1>
              <p>
              I’m Shayne Sebro a creative, collaborative, and thoughtful software engineer with a
              diverse range of experiences that have taught me to combine strong aesthetic vision with
              the practical application of technology stacks to create
              apps that are scalable, efficient, and visually
              stimulating.
              </p>
              <p>
                As a lifetime learner I look forward broadening my
                skill sets with each project I take on and always remain open to
                new challenges.
              </p>
              {/* <a href="/projects"><button className="profile-button">Projects</button></a> */}
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}
