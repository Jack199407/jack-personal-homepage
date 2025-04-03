import React, { Component } from "react";

import "./About.css";
import Me from "../../img/me.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-overlay"></div>
        <div className="about-wrapper">
          <img src={Me} alt="me" />
        </div>
        <p className="about-header">ABOUT JACK(KE) ZHAO</p>
        <p className="about-content">
          Hi, I'm a programmer originally from Beijing, China. I used to work as
          a Senior Java Developer at an online education tech company, where I
          focused on building scalable and efficient backend systems. With
          several years of industry experience, I developed a strong foundation
          in software engineering and a passion for solving complex technical
          problems. Currently, I’m living in Ottawa, Canada, and studying
          Computer Programming at Algonquin College. I'm enjoying this new
          chapter of my life — learning new technologies, meeting people from
          around the world, and expanding my perspective both personally and
          professionally. Outside of coding, I’m also a music lover and a
          hobbyist guitarist. Playing music has always been a creative outlet
          for me, and it complements my technical side with a touch of artistry.
          I truly enjoy living in Canada. The natural landscapes here are
          breathtaking and bring a sense of peace and inspiration. People are
          kind, welcoming, and open-minded. It’s a place that makes me feel at
          home, and I hope to build my future life and career here.
        </p>
      </div>
    );
  }
}
