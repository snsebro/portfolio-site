import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Particles from "react-particles-js";
import "./Homepage.css";
import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "../../Components/Header/Header";
import ParticleGraphic from "../../Components/ParticleGraphic/ParticleGraphic";

export default class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <div className="left">
          <h1>Shayne Sebro Software Engineer</h1>
        </div>
        <div className="middle">
          <div className="nav">
            <div className="logo">
              <p>logo</p>
            </div>
            <Header />
          </div>
          <div className="content">
            <div className="constellation">
              <span className="circle"></span>
              <ParticleGraphic />
            </div>
            <div className="message">
              <h1>welcome message</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse blandit sapien id orci lobortis, in aliquam dolor
                varius. Morbi tempus dui est, sit amet luctus ipsum venenatis
                in. Sed in erat eu nibh porta venenatis nec ac libero.
              </p>
              <p>
                Sed in erat eu nibh porta venenatis nec ac libero. Fusce
                vulputate metus ac elit ultricies, non dictum libero vulputate.
              </p>
              <p>Sed in erat eu nibh porta venenatis nec ac libero.</p>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}
