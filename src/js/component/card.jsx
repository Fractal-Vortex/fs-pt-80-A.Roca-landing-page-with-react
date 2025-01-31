import React from "react";
import image from '../../../src/img/rigo-baby.jpg';

export const Card = () => {
    return (
              <div className="d-flex card m-2" style={{width: "18rem"}}>
                <img src={image} className="card-img-top" alt="Rigo image"/>
                <div className="card-body ">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            );    
}