import React from "react";
import "./AeternamClothingDetails.css";

export default function AeternamClothingDetails() {
  return (
    <>
      <div className="aeternam-clothing-1">
        <p className="aeternam-clothing-text">
          Aeternam Clothing is an ecommerce site employing React to render various shop and prodcut components with dynamic functionality while efficently managing state with Redux to ensure consistent rendering between component updates
        </p>
        <div className="sneakers-shop">
          <img
            alt="shop"
            src={
              "https://i.ibb.co/FWKKQQ3/Screen-Shot-2020-08-25-at-5-05-28-PM.png"
            }
          />
        </div>
        <div className="firebase">
          <img
            alt="firebase"
            src={
              "https://i.ibb.co/9rPqJMq/Screen-Shot-2020-08-25-at-5-01-49-PM.png"
            }
          />
        </div>
      </div>
      <div className="aeternam-clothing-2">
        <p className="login-text">
          Using Google firebase for authentication, users are able to create and login into accounts with personal email addresses or linked google accounts.
           
          Additionally items can be added to a session persistent cart, and proceed to checkout. Payment processing is handled through implicaiton of the Stripe library.
        </p>
        <div className="login">
          <img
            alt="login"
            src={
              "https://i.ibb.co/rpsFKWS/Screen-Shot-2020-08-25-at-5-07-29-PM.png"
            }
          />
        </div>
        <div className="checkout">
          <img
            alt="checkout"
            src={
              "https://i.ibb.co/BBymzMB/Screen-Shot-2020-08-25-at-4-39-22-PM.png"
            }
          />
        </div>
        <div className="payment">
          <img
            alt="payment"
            src={
              "https://i.ibb.co/kycQJbt/Screen-Shot-2020-08-25-at-9-52-03-PM.png"
            }
          />
        </div>
      </div>
    </>
  );
}
