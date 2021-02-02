import React, { Component } from 'react';
import {FaPhoneAlt} from "react-icons/fa"
import {FaMapMarkerAlt}  from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa";
import "../App.css";

const icon = {
  fontSize:"20px", 
  paddingTop:"10px", 
  float:"left",
  paddingLeft:"30px",
  fontWeight:"lighter",
  color:"white"
}
const disc = {
  fontSize:"20px", 
  color:"white",
  marginTop:"15px",
  paddingLeft:"10px",
  float:"left",
  fontWeight:"lighter"
}

const social = {
  fontSize:"20px", 
  paddingTop:"10px", 
  float:"right",
  paddingRight:"20px",
  fontWeight:"lighter",
  color:"white"
}
export default class Contact extends Component {
  render() {
    return (
      <div className="topBar" style={{maxWidth:"100%", height:"50px", backgroundColor:"brown" }}>
        <div>
        < FaMapMarkerAlt style={icon} /> 
        <h5 style={disc}> 
        No. 225 Opposite Audu Manager Petrol Station, Maiduguri Road,Tarauni, Kano</h5>
        <FaPhoneAlt style={icon} />
        <h5 style={disc} >08123456789, 08012345678</h5>
        </div>

        <div>
          <a href="" ><FaInstagram style={social}/></a>
          <a href="" ><FaLinkedinIn style={social}/></a>
          <a href=""><FaTwitter style={social}/></a>
          <a href=""><FaFacebookF style={social} /></a> 
        </div>
      </div>
     
    )
  }
}
