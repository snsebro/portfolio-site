import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProjectList.css";

export default class ProjectList extends Component {
  render() {
    return (
      <div className="project-list">
        {this.props.projects.map((project, index) => (
          
            <Link to={`/projects/${project.name}`}>
            <img alt="project screenshot" onClick={() => { this.props.setProject(project.name) }} src={project.screenshot} />
            </Link>
         
        ))}
      </div>
    );
  }
}
