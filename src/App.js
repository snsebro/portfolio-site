import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/Homepage/About/About";
import ProjectPage from "./Pages/Project-Page/ProjectPage";
import Contact from "./Pages/Homepage/Contact/Contact";

function App() {
  return (
    <>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={ProjectPage} />
    </>
  );
}

export default App;
