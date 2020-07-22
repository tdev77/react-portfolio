import React from "react";

var Home = () => {
  return (

<div>
  

  <div className="carousel">
    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval={10000}>
          <img src="unit.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-interval={2000}>
          <img src="kanye.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="1936344_101115143235322_7386909_n.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-interval={2000}>
          <img src="logo7.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="1918070_105257112821125_3398747_n.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>  
  {/* Optional JavaScript */}
  {/* jQuery first, then Popper.js, then Bootstrap JS */}
</div>







    );
};

export default Home;