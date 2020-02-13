import React from 'react';

const Download = (prop)=>{
    return(
        <section className="page-section bg-dark text-white">
    <div className="container text-center">
      <h2 className="mb-4">{prop.header}</h2>
      <a className="btn btn-light btn-xl" href="#">{prop.button}</a>
    </div>
  </section>
    )
}
export default Download;