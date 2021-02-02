import React, { Component } from 'react';
import {FaUniversity} from "react-icons/fa";
// import {FaHandshake} from "react-icons/fa";
import {FaDraftingCompass} from "react-icons/fa";
import {FaBuilding} from "react-icons/fa"
import {FaHome} from "react-icons/fa";
import {FaPencilRuler} from "react-icons/fa";
import {FaHandsHelping} from "react-icons/fa";

export default class Service extends Component {
  render() {
    return (
      <>
      <div className="services">
        <h3>Our Services</h3>
        <div className="mainContent">

          <div className="contain">
            <div className="icon">
             <FaDraftingCompass className="ico"/>
            </div>
            <div className="article">
            <p>PRE-CONSTRUCTION SERVICES</p>
            <p>We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand...</p>
            </div>
          </div>

          <div className="contain">
            <div className="icon">
            <FaUniversity className="ico" />
            </div>
            <div className="article">
            <p>GENERAL CONTRACTING</p>
            <p>We have a long list of professional contractors, whom our engineers and architects enjoy to work with on a majority of our projects!</p>
            </div>
          </div>

          <div className="contain">
            <div className="icon">
            <FaHome className="ico"/> 
            </div>
            <div className="article">
            <p>CONSTRUCTION SERVICES</p>
            <p>Our customers love the pace/quality tempo that we show during each of the principal construction processes!</p>
            </div>
          </div>
            {/* END OF FIRST THREE CONTENT */}
          <div className="contain">
            <div className="icon">
             <FaHandsHelping className="ico"/>
            </div>
            <div className="article">
            <p>CONSTRUCTION MANAGEMENT</p>
            <p>Construction project management is essential. We're using the most time and iterations efficient life cycles methods for that</p>
            </div>
          </div>

          <div className="contain">
            <div className="icon">
            <FaBuilding className="ico" />
            </div>
            <div className="article">
            <p>BUILDING INFORMATION MODELING(BIM)</p>
            <p>We have a long list of professional contractors, whom our engineers and architects enjoy to work with on a majority of our projects!</p>
            </div>
          </div>

          <div className="contain">
            <div className="icon">
            <FaPencilRuler className="ico"/> 
            </div>
            <div className="article">
            <p>DESIGN-BUILD</p>
            <p>Our customers love the pace/quality tempo that we show during each of the principal construction processes!</p>
            </div>
          </div>

        </div>
      </div>

     </>
    )
  }
}
