import React from "react";
import Header from "../../../Components/Header/Header";
import ParticleGraphic from "../../../Components/ParticleGraphic/ParticleGraphic";

export default function Contact() {
  return (
    <div className="App">
      <div className="left">
        <h1>Shayne Sebro Software Engineer</h1>
      </div>
      <div className="middle">
        <Header />

        <div className="content">
          <div className="constellation">
            <span className="circle"></span>
            <ParticleGraphic />
          </div>
          <div className="message">
            <h1>Contact Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse blandit sapien id orci lobortis, in aliquam dolor
              varius. Morbi tempus dui est, sit amet luctus ipsum venenatis in.
              Sed in erat eu nibh porta venenatis nec ac libero.
            </p>
            <p>
              Sed in erat eu nibh porta venenatis nec ac libero. Fusce vulputate
              metus ac elit ultricies, non dictum libero vulputate.
            </p>
            <p>Sed in erat eu nibh porta venenatis nec ac libero.</p>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}
