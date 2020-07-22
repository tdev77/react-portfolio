import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    return ( 

<nav className="navbar navbar-expand-lg navbar-dark" style={{"background-color":"black"}}>
  <a className="navbar-brand" href="main.html">TEDDY DYE</a>
  <button className="navbar-toggler" aria-expanded="false" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation" type="button" data-target="#navbarNavAltMarkup" data-toggle="collapse">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/">Home</Link>
      <Link className="nav-item nav-link" to="/about">About</Link>
      <Link className="nav-item nav-link" to="/portfolio">Portfolio</Link>
      <Link className="nav-item nav-link" to="/webprojects">Web Projects</Link>
      <Link className="nav-item nav-link" to="/contacts">Contact</Link>
    </div>
  </div>
</nav>



)}

export default Nav;