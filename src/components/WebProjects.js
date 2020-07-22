import React from "react";
import { Link } from "react-router-dom";
const WebProjects = () => {
  return (
    <div>
        <br />
      <div className="row text-center text-lg-left">
        <div className="col-lg-3 col-md-4 col-6">
          <a
            href="https://cas2931.github.io/bcsProject1/"
            className="d-block mb-4 h-100"
          >
            <img
              className="img-fluid img-thumbnail"
              src="cas2931.github.io.png"
              alt
            />
            <h5>Group Project One</h5>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a
            href="https://project-2-spt.herokuapp.com/"
            className="d-block mb-4 h-100"
          >
            <img
              className="img-fluid img-thumbnail"
              src="project_2_sptherokuapp.png"
              alt
            />
            <h5>Group Project Two</h5>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a
            href="https://tdev77.github.io/Bootstrap_Hwk.github.io/index.html"
            className="d-block mb-4 h-100"
          >
            <img
              className="img-fluid img-thumbnail"
              src="tdev77.github.io.png"
              alt
            />
            <h5>Bootstrap Assignment Two</h5>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a
            href="https://tdev77.github.io/Homework1.github.io/"
            className="d-block mb-4 h-100"
          >
            <img
              className="img-fluid img-thumbnail"
              src="refactor_tdev77.github.io.png"
              alt
            />
            <h5>Code Refactor Assignment One</h5>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a
            href="https://tdev77.github.io/ComicQuiz/"
            className="d-block mb-4 h-100"
          >
            <img
              className="img-fluid img-thumbnail"
              src="_quiztdev77.github.io.png"
              alt
            />
            <h5>Comic Quiz</h5>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a
            href="https://tdev77.github.io/weatherdashboardapi/"
            className="d-block mb-4 h-100"
          >
            <img
              className="img-fluid img-thumbnail"
              src="api_tdev77.github.io.png"
              alt
            />
            <h5>Weather Dashboard</h5>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a
            href="https://tdev77.github.io/passwordProject/"
            className="d-block mb-4 h-100"
          >
            <img
              className="img-fluid img-thumbnail"
              src="password_tdev77.github.io.png"
              alt
            />
            <h5>Password Generator</h5>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a
            href="https://tdev77.github.io/Day-Planner/"
            className="d-block mb-4 h-100"
          >
            <img
              className="img-fluid img-thumbnail"
              src="planner1_tdev77.github.io.png"
              alt
            />
            <h5>Day Planner</h5>
          </a>
        </div>
        <div />
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </div>
    </div>
  );
};

export default WebProjects;
