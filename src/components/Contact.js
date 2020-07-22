import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
    return ( 

<div>
    <br />
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h2 className="section title">CONTACT ME</h2>
        <h4>Teddy Dye</h4>
        <h5>(917) 412-2737</h5>
        <h6>tdye.dev@gmail.com</h6>
        <br />
      </div>
      <div className="col-md-12 col-md-offset-4">
        <form id="contact" method="post" className="form" role="form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
            </div>
            <div className="col-md-6 form-group">
              <input className="form-control" id="email" name="email" placeholder="Email" type="text" required />
            </div>
          </div>
          <textarea className="form-control" id="message" name="message" placeholder="Message" rows={5} defaultValue={""} />
          <br />
          <div className="row">
            <div className="col-md-12 form-group">
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


);
};


export default Contact;