import React from "react";
import Particles from 'react-particles-js';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left">
        <h1>Shayne Sebro Software Engineer</h1>
      </div>
      <div className="middle">
        <div className="nav">
          <div className="logo">
            <p>logo</p>
          </div>
          <div className="nav-links">
            <ul>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Projects</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="constellation">
            <span className="circle"></span>
            <div className="graphic">
              <Particles
                params={{
                  particles: {
                    number: {
                      value: 400,
                      density: {
                        enable: true,
                        value_area: 1000,
                      }
                    },
                  },
                  interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "grab"
                      },
                      onclick: {
                        enable: false,
                        mode: "push"
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 140,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
                  },
                }}
              />
            </div>
          </div>
          <div className="message">
            <h1>welcome message</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit sapien id orci lobortis, in aliquam dolor varius. Morbi tempus dui est, sit amet luctus ipsum venenatis in. Sed in erat eu nibh porta venenatis nec ac libero. 
            </p>
            <p>
              Sed in erat eu nibh porta venenatis nec ac libero. Fusce vulputate metus ac elit ultricies, non dictum libero vulputate. 
            </p>
            <p>
            Sed in erat eu nibh porta venenatis nec ac libero.   
            </p>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default App;
