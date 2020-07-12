import React from "react";
import { Route} from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/Homepage/About/About"
import ProjectPage from "./Pages/Project-Page/ProjectPage"
import Contact from "./Pages/Homepage/Contact/Contact"

function App() {
  return (
    <>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={About} />
      <Route  exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={ProjectPage}/>
    </>
  );
}

export default App;
