import React, { Component } from 'react';
import {FaQuoteLeft} from "react-icons/fa";
import {FaQuoteRight} from "react-icons/fa";


export default class Testimonials extends Component {
  render() {
    return (
      <div className="testimonial">
        <h3>Testimonials</h3>
        <div className="containa">
          <div className="quoteText1">
          <img src="./testimonial1.jpg" alt="test"/>
            {/* <div className="images">
            
            </div> */}
            <div className="textquote">
            <p><FaQuoteLeft/> As an official from North Dakota's state government, I want to thank your construction company. On behalf of the citizens of the state, we're so grateful for this new innovative building! This allows North Dakota to hold its 
              legislative operations in a contemporary, progressive architectural environment!? <FaQuoteRight/> </p>
            </div>
          </div>

          <div className="quoteText1">
          <img src="./testimonial2.jpg" alt="test"/>

            {/* <div className="images">
            </div> */}
            <div className="textquote">
            <p><FaQuoteLeft/> This bridge project was funded by small and medium business of Rhode Island, as well as by its private citizens. After the hurricane hit our shores recently, we all were concerned for the Okaloppo river not having a proper landline connection. But now, after Constructo 
              company finished the project, the county can enjoy its new, beautiful infrastructure! <FaQuoteRight/></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
