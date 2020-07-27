import React from "react";
import "./AeternamDetails.css";

export default function AeternamDetails() {
  return (
    <>
      <div className="aeternam-1">
        <p className="aeternam-text">
          With well planned ERDs and wireframing, Aeternam Beauty utilizes React Hooks to stylishly render products and reviews stored in a postgresql databsed hosted on heroku
        </p>
        <div className="ERD">
          <img
            alt="ERD"
            src={
              "https://i.ibb.co/7bbR7xh/Screen-Shot-2020-07-25-at-8-09-29-PM.png"
            }
          />
        </div>
        <div className="postico">
          <img
            alt="postico"
            src={
              "https://i.ibb.co/Ht1ptbx/Screen-Shot-2020-07-25-at-8-43-10-PM.png"
            }
          />
        </div>
        {/* <div className="heroku"></div> */}
      </div>
      <div className="aeternam-2">
        <p className="auth-text">
        Using JSON web tokens for authentication, admin users are given full CRUD functionality to control and update the sites inventory, while customers are able to view products and contribute reviews</p>
        <div className="auth">
          <img
            alt="auth"
            src={
              "https://i.ibb.co/CKCpvpP/Screen-Shot-2020-07-25-at-8-10-03-PM.png"
            }
          />
        </div>
        <div className="reviews">
          <img
            alt="reviews"
            src={
              "https://i.ibb.co/k5GtP39/Screen-Shot-2020-07-25-at-8-14-20-PM.png"
            }
          />
        </div>
        <div className="edit">
          <img
            alt="edit"
            src={
              "https://i.ibb.co/h2P69Bb/Screen-Shot-2020-07-25-at-8-12-12-PM.png"
            }
          />
        </div>
        <div className="add">
          <img
            alt="add"
            src={
              "https://i.ibb.co/DpCrYKN/Screen-Shot-2020-07-25-at-8-10-56-PM.png"
            }
          />
        </div>
      </div>
    </>
  );
}
