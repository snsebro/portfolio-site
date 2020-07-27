import React from "react";
import "./ProjectSpecs.css"

export default function ProjectSpecs(props) {
  return (
    <div className="project-specs">
      <div className="spec-section">
        <h1>Overview:</h1>
        {props.project.overview}
      </div>
      <div className="spec-section">
        <h1>MVP:</h1>
        {props.project.MVP.map(MVP =>
          <p>-{MVP}</p>)}
      </div>
      <div className="spec-section">
        <h1>In Progress:</h1>
        {props.project.in_progress.map(pmvp =>
          <p>-{pmvp}</p>)}
      </div>
    </div>
  );
}
