import React, { Component } from 'react';
import '../css/Homepage.css';

class Homepage extends Component {
  
  render() {
    
    return (
      <div className="homepage">
        <div className="self-intro">
          <p className="title">JOU-AN (JOANNE) CHEN</p>
          <div className="subtitle"> A Senior Student of <b>National Taiwan University</b><br/>Double Major in <b>Business Administration</b> and <b>Computer Science</b></div>
          <div className="content">Hi! I am Joanne, a college student as well as a self learner in web development. I have worked as an IT specialist intern for about eight months in IBM corporate internet bank development team. I am interested in the industry of technology and finance, and looking forward to new challenges in different fields.</div>
        </div>
        <div className="slogan">
          <div className="content">Always prepared to be amazed.</div>
        </div>
        <div className="education">
          <div className="title">EDUCATION</div>
        </div>
        <div className="experience">
          <div className="title">EXPERIENCE</div>        
        </div>
        <div className="skill">
          <div className="title">TECHNICAL SKILL</div>
        </div>
        <div className="extracurricular">
          <div className="title">EXTRACURRICULAR</div>
        </div>
      </div>
    );
  }
}

export default Homepage;