import React from 'react'
import Particles from "react-particles-js";
import "./ParticleGraphic.css"

export default function ParticleGraphic() {
  return (
    <div className="graphic">
                <Particles
                  params={{
                    particles: {
                      number: {
                        value: 400,
                        density: {
                          enable: true,
                          value_area: 1000,
                        },
                      },
                    },
                    interactivity: {
                      detect_on: "canvas",
                      events: {
                        onhover: {
                          enable: true,
                          mode: "grab",
                        },
                        onclick: {
                          enable: false,
                          mode: "push",
                        },
                        resize: true,
                      },
                      modes: {
                        grab: {
                          distance: 140,
                          line_linked: {
                            opacity: 1,
                          },
                        },
                        bubble: {
                          distance: 400,
                          size: 40,
                          duration: 2,
                          opacity: 8,
                          speed: 3,
                        },
                        repulse: {
                          distance: 200,
                          duration: 0.4,
                        },
                        push: {
                          particles_nb: 4,
                        },
                        remove: {
                          particles_nb: 2,
                        },
                      },
                    },
                  }}
                />
              </div>
  )
}
