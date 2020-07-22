import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import WebProjects from "./components/WebProjects";
import About from "./components/About";

function App() {
  return (
    <div className="App">
    
     
            <Router>
            <Nav></Nav>
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/webprojects" component={WebProjects}></Route>
            <Route exact path="/portfolio" component={Portfolio}></Route>
            <Route exact path="/contacts" component={Contact}></Route>
          </Switch>
          <Footer></Footer>
          </Router>
    </div>
  );
}

export default App;
