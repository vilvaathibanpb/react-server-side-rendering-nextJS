import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Home" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/ContactUs" component={ContactUs} />
    </div>
  </Router>,
  document.getElementById("root")
);
