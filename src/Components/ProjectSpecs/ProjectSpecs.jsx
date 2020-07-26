import React from "react";
import "./ProjectSpecs.css"

export default function ProjectSpecs(props) {
  return (
    <div className="project-specs">
      <div className="spec-section">
        <h1>Tech Stack:</h1>
        {props.project && props.project.stack.map(tech => <p>{tech}</p>)}
      </div>
      <div className="spec-section">
        <h1>Details:</h1>
        <p>Fullstack ecommerce app</p>
      </div>
      <div className="spec-section">
        <h1>MVP:</h1>
        <p>Details about project MVP</p>
      </div>
    </div>
  );
}
