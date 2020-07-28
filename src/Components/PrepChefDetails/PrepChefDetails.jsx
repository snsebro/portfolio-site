import React from "react";
import "./PrepChefDetails.css";

export default function PrepChefDetails() {
  return (
    <>
      <div className="prep-chef-1">
        <div className="prep-chef-text">
          <p>
            Prep chef makes use of the Axios library to make HTTP requests to
            several endpoints of the Spoonacular API. With this functionality
            users are able to search for meals by specifc keywords and generate
            meals according to diet restrictions.
          </p>

          <p>
            As an added feature users are able to see nutrition information for
            all meals as well as step by step directions for each recipe.
          </p>
        </div>
        <div className="search">
          <img
            alt="search"
            src={
              "https://i.ibb.co/1vF1tyJ/Screen-Shot-2020-07-25-at-8-17-25-PM.png"
            }
          />
        </div>
        <div className="recipe-detail">
          <img
            alt="recipe detail"
            src={
              "https://i.ibb.co/WnvgYX1/Screen-Shot-2020-07-25-at-8-17-14-PM.png"
            }
          />
        </div>
      </div>
      <div className="prep-chef-2">
        <div className="day-select">
          <img
            alt="day select"
            src={
              "https://i.ibb.co/ZK7Rmxt/Screen-Shot-2020-07-25-at-8-16-23-PM.png"
            }
          />
        </div>
        <div className="diet">
          <img
            alt="diet select"
            src={
              "https://i.ibb.co/BqGRrSN/Screen-Shot-2020-07-25-at-8-16-38-PM.png"
            }
          />
        </div>
        <div className="summary">
          <img
            alt="meal plan summary"
            src={
              "https://i.ibb.co/3NMgQY4/Screen-Shot-2020-07-25-at-8-16-58-PM.png"
            }
          />
        </div>
      </div>
    </>
  );
}
