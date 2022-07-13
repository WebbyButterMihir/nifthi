import React from "react";
import Events from "./eventdata";
import "./featureEvent.css"


const FeatureEvents = () => {
  
    return (
      <div className="container">
        <h1 className="featuredevent justify-content-center justify-content-sm-start d-flex">FEATURED EVENTS</h1>
        <div className="row">
          {Events.map((item) => (
            <div className=" d-flex justify-content-center col-lg-3 col-md-4 col-sm-12">
              <div class="card fecard">
                <img class="card-img-top" src={item.image} alt="Card  cap" />
                <div class="card-body">
                  <p className="featuredeventtitle">{item.title}</p>
                  <p className="">
                    <i class="fa-solid fa-calendar facal"></i>
                    <span className="ms-2 textcalender">{item.eventDetail}</span>
                  </p>
                  <p className="location">
                    <i class="fa-solid fa-location-dot faloc"></i>
                    <span className="ms-2">{item.place}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
 
};

export default FeatureEvents;
