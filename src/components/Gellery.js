import React, { Component } from 'react';
import pic1 from "../assets/building2.jpeg";
import pic2 from "../assets/building3.jpeg";
import pic4 from "../assets/building4.jpeg";
import pic5 from "../assets/building5.jpeg";
import pic6 from "../assets/building6.jpeg";
import "../App.css"

export default class Gellery extends Component {
  render() {
    return (

<div className="gallery">
  <h3>Projects Gallery</h3>
  <div className="galleryContent">

  <div className="contain">
  <div className="article">
    <img src={pic6} alt=""/>
  </div>
</div>

<div className="contain">
  <div className="article">
    <img src={pic2}alt=""/>
  </div>
</div>

<div className="contain">
  <div className="article">
    <img src={pic5} alt=""/>
  </div>
</div>

<div className="contain">
  <div className="article">
    <img src={pic2} alt=""/>
  </div>
</div>

<div className="contain">
  <div className="article">
    <img src={pic5} alt=""/>
  </div>
</div>

<div className="contain">
  <div className="article">
    <img src={pic6} alt=""/>
  </div>
</div>

  </div>
      

</div>
    )
  }
}
