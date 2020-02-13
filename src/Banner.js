import React from 'react';

const Banner = (prop) => {

   

   

    return(
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" >
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={prop.bannerImgOne} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>{prop.hOne}</h5>
              <p>{prop.pOne}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={prop.bannerImgTwo} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>{prop.hTwo}</h5>
              <p>{prop.pTwo}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={prop.bannerImgThree} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>{prop.hThree}</h5>
              <p> {prop.pThree}</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
        
    )
}

export default Banner;

