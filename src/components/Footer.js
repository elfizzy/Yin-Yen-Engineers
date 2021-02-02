import React, { Component } from 'react'
import {FaLinkedinIn} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa";
import {FaHeart}  from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
        <footer> 
          <div className="foot">
            <div className="comp"> &copy Copyright Multi-Design Engineers
              {/* <ul>
                <li><FaLinkedinIn/></li>
                <li><FaInstagram/></li>
                <li><FaFacebookF/></li>
                <li><FaTwitter/></li>
              </ul> */}
            </div>
            <div className="dev">Developed with <span style={{color:"red",marginTop:"20px",fontSize:"12px"}}><FaHeart /></span> by  Dcypher Technologies </div> 
          </div>
          

        </footer>
 
    )
  }
}
