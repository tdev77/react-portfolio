import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
        <br />
<div className="container">
  <div className="row">
    <div className="col-md-3">
      <img src="thumbnail.jpg" className="img-thumbnail" />
      <br />
      <a href="https://github.com/tdev77" style={{"color":"black"}}>Github</a>
      <br />
      <a href="https://www.linkedin.com/in/teddy-dye-1560731a1/" style={{"color":"red"}}>Linkedin</a>
      <br />
      <a href="mailto:tdye.dev@gmail.com" style={{"color":"black"}}>tdye.dev@gmail.com</a>
      <br />
      <a href="Theodore-Dye.pdf" style={{"color":"red"}}>Resume</a>
      <br />
      <a href={9174122737} style={{"color":"black"}}>(917) 412-2737</a>
    </div>
    <div className="col-md-9">
      <h1 className="text-center">About Me</h1>
      <hr width="100%" align="left" />
      <p className="text-monospace">Greetings! Thank you for viewing my website. My name is Teddy Dye, I am currently enrolled in a Fullstack Developement program, at UCONN University in Stamford CT. Throughout my process of learning, and absorbing all of the fundamentals of Web Developement, I plan on furthering my skills to one day obtaining a career in the field.</p>
      <p className="text-monospace">Aside from my studies, I have a background in post production, where I have delved into the realm of film editing for approximately 2 1/2 years, learning a great deal of knowledge within the television industry. I also have some experience in photography, my journey first began in high school, and have later taught myself, shooting various subjects for a period of time. Lastly, I am skilled in the areas of graphic design, retouching, print, logo design etc.</p>
    </div>
  </div>
</div>
</div>
);
};

export default About;