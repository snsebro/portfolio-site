import React from "react";
import Header from "../../../Components/Header/Header";
import ParticleGraphic from "../../../Components/ParticleGraphic/ParticleGraphic";
import "./Contact.css";

export default function Contact() {
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
            <h1>Contact Me</h1>
            <form className="form">
              <label>
                <input type="text" placeholder="Name"/>
              </label>
              <label>
                <input type="text" placeholder="Email"></input>
              </label>
              <label>
                <textarea placeholder="Message Me"></textarea>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}
