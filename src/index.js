import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
