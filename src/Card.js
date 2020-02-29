import React from "react"

const Card = (prop) =>{

    
    return(
              <div className="container-fluid p-0" >
                <div className="row no-gutters"/>
            <img src={prop.image} className="card-img-top " alt="..."/>
            <div className="col-lg-4 col-sm-6"/>
            <div className="card-body">
              <h5 className="card-title">{prop.title}</h5>
              <p className="card-text">{prop.description}</p>
              <a href="#" className="btn btn-primary">Click Here</a>
            </div>
          </div>
      //     <div className="container-fluid p-0">
      // <div className="row no-gutters"/>
      //   <div className="col-lg-4 col-sm-6"/>
      //     <a className="portfolio-box" href={prop.image}>
      //       <img className="img-fluid" src={prop.image} alt=".."/>
      //       <div className="portfolio-box-caption">
      //         <div className="project-category text-white-50">
      //           {prop.category}
      //         </div>
      //         <div className="project-name">
      //           {prop.proname}
      //         </div>
      //       </div>
      //     </a>
      //   </div>
    )
  }


export default Card;
