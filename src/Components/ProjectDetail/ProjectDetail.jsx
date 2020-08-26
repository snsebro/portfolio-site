import React from "react";
import { withRouter, Route } from "react-router-dom";

import AeternamDetails from "../AeternamDetails.jsx/AeternamDetails";
import PrepChefDetails from "../PrepChefDetails/PrepChefDetails";
import AeternamClothingDetails from "../AeternamClothingDetails/AeternamClothingDetails";

import "./ProjectDetail.css";

function ProjectDetail() {
  return (
    <>
      <div className="project-detail-container">
        <Route path="/projects/Aeternam Beauty">
          <AeternamDetails />
        </Route>
        <Route path="/projects/Prep Chef">
          <PrepChefDetails />
        </Route>
        <Route path="/projects/Aeternam Clothing">
          <AeternamClothingDetails />
        </Route>
      </div>
      <div className="scroll">Scroll for more info</div>
    </>
  );
}

export default withRouter(ProjectDetail);
