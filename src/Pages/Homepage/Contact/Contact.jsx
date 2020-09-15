import React, { Component } from "react";
import axios from 'axios'
import Header from "../../../Components/Header/Header";
import ParticleGraphic from "../../../Components/ParticleGraphic/ParticleGraphic";
import "./Contact.css";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault()

    const { name, email, message } = this.state
    
    const form = await axios.post('/api/contact', {
      name,
      email,
      message
    })
  }

  render() {
    return (
      <div className="container">
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
              <form
                className="form"
                method="post"
                action="contact-form-process.php"
                onSubmit={this.handleSubmit}
              >
                <label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    required
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  <textarea
                    name="message"
                    placeholder="Message Me"
                    required
                    onChange={this.handleChange}
                  ></textarea>
                </label>
                <button className="contact-button" type="submit">
                  Send Message
                </button>
              </form>
              <p className="email">
                *Alternatively email me at shaynesebro@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}

export default Contact;
