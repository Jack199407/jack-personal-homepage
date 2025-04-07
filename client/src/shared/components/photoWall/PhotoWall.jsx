import React, { Component } from "react";

import Photo1 from "../../../assets/photo1.jpg";
import Photo2 from "../../../assets/photo2.jpg";
import Photo3 from "../../../assets/photo3.jpg";
import Photo4 from "../../../assets/photo4.jpg";
import Photo5 from "../../../assets/photo5.jpg";
import Photo6 from "../../../assets/photo6.jpg";
import Photo7 from "../../../assets/photo7.jpg";
import Photo8 from "../../../assets/photo8.jpg";
import Photo9 from "../../../assets/photo9.jpg";
import "./PhotoWall.css";

class PhotoWall extends Component {
  photos = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
    Photo9,
  ];

  render() {
    return (
      <div className="photowall-wrapper">
        <p>LIFE FOOTPRINTS</p>
        <div className="photowall-container">
          {this.photos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`photo-${index}`}
              className="photowall-image"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PhotoWall;
