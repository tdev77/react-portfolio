import React from "react";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    
    <div>
        <br />
      <div className="container">
          
        <h1 className="text-center">Portfolio</h1>
        <div className="row">
          <div className="col-sm-6">
            <img src="unit.jpg" className="card-img-top" alt="g-unit" />
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Print Design</h5>
                <p className="card-text">Mixtape Cover</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <img src="logo7.jpg" className="card-img-top" alt="logo7" />
              <div className="card-body mb-4">
                <h5 className="card-title">Imprint</h5>
                <p className="card-text">Logo Design</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-6">
            <img
              src="Method Lizard.png"
              className="card-img-top"
              alt="method man"
            />
            <div className="card">
              <div className="card-body mb-4">
                <h5 className="card-title">Print Design</h5>
                <p className="card-text">Mixtape Cover</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <img
              src="1936344_101098523236984_2792870_n.jpg"
              className="card-img-top"
              alt="kids"
            />
            <div className="card">
              <div className="card-body mb-4">
                <h5 className="card-title">Photography</h5>
                <p className="card-text">Photography work </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Optional JavaScript */}
      {/* jQuery first, then Popper.js, then Bootstrap JS */}
    </div>
  );
};

export default Portfolio;
