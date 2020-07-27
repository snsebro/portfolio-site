import React from 'react'
import "./ProjectLinks.css"

export default function ProjectLinks(props) {
  return (
    <div className="deploy-info">
      <div className="link-section">
        <h1>Deployment:</h1>
        {props.project && <a href={props.project.deployed_link}>Check out the deployed site here</a>}
      </div>
      <div className="link-section">
        <h1>Github:</h1>
        {props.project && <a href={props.project.github}>Check out the Github repo here</a>}
      </div>
    </div>
  )
}
