import React from "react";
import "./AeternamDetails.css";

export default function AeternamDetails() {
  return (
    <>
      <div className="aeternam-1">
        <p className="aeternam-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque
          rem, accusamus sint molestias temporibus illum, esse aliquid
          cupiditate laudantium dolor et dolorem deserunt asperiores, veniam
          sapiente a quod error?
        </p>
        <div className="ERD">
          <img
            src={
              "https://i.ibb.co/7bbR7xh/Screen-Shot-2020-07-25-at-8-09-29-PM.png"
            }
          />
        </div>
        <div className="postico">
          <img
            src={
              "https://i.ibb.co/Ht1ptbx/Screen-Shot-2020-07-25-at-8-43-10-PM.png"
            }
          />
        </div>
        {/* <div className="heroku"></div> */}
      </div>
      <hr></hr>
      <div className="aeternam-2">
        <p className="auth-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          mollitia vel quam debitis corporis. Adipisci nam, nesciunt est cum
          modi quasi rem magnam? Suscipit quis itaque animi delectus illum
          corporis.
        </p>
        <div className="auth">
          <img
            src={
              "https://i.ibb.co/CKCpvpP/Screen-Shot-2020-07-25-at-8-10-03-PM.png"
            }
          />
        </div>
        <div className="reviews">
          <img
            src={
              "https://i.ibb.co/k5GtP39/Screen-Shot-2020-07-25-at-8-14-20-PM.png"
            }
          />
        </div>
        <div className="edit">
          <img
            src={
              "https://i.ibb.co/h2P69Bb/Screen-Shot-2020-07-25-at-8-12-12-PM.png"
            }
          />
        </div>
        <div className="add">
          <img
            src={
              "https://i.ibb.co/DpCrYKN/Screen-Shot-2020-07-25-at-8-10-56-PM.png"
            }
          />
        </div>
      </div>
    </>
  );
}
