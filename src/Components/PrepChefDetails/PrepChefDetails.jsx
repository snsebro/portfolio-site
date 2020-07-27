import React from "react";
import "./PrepChefDetails.css"

export default function PrepChefDetails() {
  // {if(!props.project {})}
  return (
    <>
      <div className="prep-chef-1">
        <div className="prep-chef-text">
          <p>Prep chef makes use of the Axios library to make HTTP requests to several endpoints of the Spoonacular API. With this functionality users are able to search for meals by specifc keywords, generate meals according to diet restrictions, and 
          </p>
          <br></br>
          <p>As an added feature users are able to see nutrition information for all meals as well as step by step directions for each recipe. 
          </p>
        </div>
        <div className="search">
          <img src={"https://i.ibb.co/1vF1tyJ/Screen-Shot-2020-07-25-at-8-17-25-PM.png"}/>
        </div>
        <div className="recipe-detail">
          <img src={"https://i.ibb.co/WnvgYX1/Screen-Shot-2020-07-25-at-8-17-14-PM.png"}/>
        </div>
      </div>
      <hr></hr>
      <div className="prep-chef-2">
        <div className="day-select">
          <img src={"https://i.ibb.co/ZK7Rmxt/Screen-Shot-2020-07-25-at-8-16-23-PM.png"}/>
        </div>
        <div className="diet">
          <img src={"https://i.ibb.co/BqGRrSN/Screen-Shot-2020-07-25-at-8-16-38-PM.png"}/>
        </div>
        <div className="summary">
          <img src={"https://i.ibb.co/3NMgQY4/Screen-Shot-2020-07-25-at-8-16-58-PM.png"}/>
        </div>
      </div>
    </>
  );
}
