import React, { Component } from 'react';
import {FaLinkedinIn} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import "../App.css";

export default class Forms extends Component {
  render() {
    return (
      <div className="getForms">
        <div className="contact">
          <h3>Contact</h3>
          <div>
          <p><span>Address:</span> No. 225 Opposite Audu Manager Filling, Maiduguri Road,Tarauni, Kano</p>
          <p><span>Phone:</span> 08123456789, 08012345678</p>
          <p><span>WE ARE OPEN:</span> Mn - Fr:10am - 5pm</p>
          </div>
          

          <div className="social">
          <FaLinkedinIn className="socialIcons"/>
          <FaFacebookF className="socialIcons"/>
          <FaInstagram className="socialIcons"/>
          <FaTwitter className="socialIcons"/>
          </div>
        </div>

        <div className="form">
          <h3>Get in Touch</h3>
          <input type="text" name="" id="" placeholder="Name"/>
          <input type="email" name="" placeholder="Email" id=""/>
          <textarea name="" id="" cols="20" rows="10" placeholder="Message"></textarea>
          <a href="#"><button type="submit">Submit</button></a>
        </div>
        
      </div>
    )
  }
}
