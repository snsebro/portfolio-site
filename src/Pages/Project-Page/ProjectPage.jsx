import React, { Component } from "react";
import "./ProjectPage.css";

export default class ProjectPage extends Component {
  render() {
    return (
      <>
        <header>Header Stuff here</header>
        <div className="main">
          <div className="shayne"></div>
          <div className="projects-container">
            <div className="project-header">
              <div className="header-left"></div>
              <div className="header-mid"></div>
              <div className="header-right"></div>
            </div>



            <div className="projects">
              <div className="project-name"></div>
              <div className="project-content"></div>
              <div className="project-details"></div>
            </div>
          </div>
          <div className="space"></div>
        </div>
      </>
    );
  }
}
