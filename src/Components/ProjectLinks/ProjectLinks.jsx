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
        <h1>Asset Links:</h1>
        <p>Check out the github repo here</p>
      </div>
      <div className="link-section">
        <h1>MVP:</h1>
        <p>Details about project MVP</p>
      </div>
    </div>
  )
}
