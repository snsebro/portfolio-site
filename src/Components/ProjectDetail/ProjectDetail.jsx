import React from "react";
import "./ProjectDetail.css";
import AeternamDetails from "../AeternamDetails.jsx/AeternamDetails";
import { withRouter, Route } from "react-router-dom";
import PrepChefDetails from "../PrepChefDetails/PrepChefDetails";

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
      </div>
      <div className="scroll">Scroll for more info</div>
    </>
  );
}

export default withRouter(ProjectDetail);
