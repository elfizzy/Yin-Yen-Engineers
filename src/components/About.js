import React, { Component } from 'react';
import "../App.css";

export default class About extends Component {
  render() {
    return (
      <>
      <div className="about">
        <div className="aboutText">
          <h3>About Us</h3>
          <p>OUR CONSTRUCTION COMPANY WAS FOUNDED 10 YEARS AGO, AT THE VERY PEAK OF THE BUILDING FRENZY IN NIGERIA..</p>
            <h4>Since then we've built hundreds of commercial, government and private buildings and facilities. 
              It may not sound like a lot, but if you estimate the manpower, working hours, materials, 
              planning and correlating that were all involved in completing each separate project,
               then our productivity is immense!</h4>

              <a href="#"><button>Contact Us</button></a>
        </div>
        <div className="aboutPic">
          <img style={{maxWidth:"100%",paddingRight:"5%"}} src={"./dumbell.jpeg"} alt=""/>
        </div>
        
      
      </div>
      </>
    )
  }
}
