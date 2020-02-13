import React from 'react';

const About=(prop)=>{



return(


<section className="jumbotron" id="about">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="text-black mt-0">We've got what you need!</h2>
          <hr className="divider light my-4"/>
          <p className="text-dark-50 mb-4">Subscribe to connect to Service providers in you area!</p>
          <a className="btn btn-dark btn-xl js-scroll-trigger" href="#services">{prop.btn}</a>
        </div>
      </div>
    </div>
  </section>




  )};

  export default About;