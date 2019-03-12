import React, { Component } from 'react';
import '../css/Homepage.css';

class Homepage extends Component {
  
  render() {
    
    return (
      <div className="homepage">
        <div className="self-intro">
          <p className="title">JOU-AN (JOANNE) CHEN</p>
          <div className="subtitle"> Senior Student of <b>National Taiwan University</b><br/>Double Major in <b>Business Administration</b> and <b>Computer Science</b></div>
          <div className="content">Hi! I am Joanne, a college student as well as a self learner in web development. I am interested in the industries of technology and finance, and looking forward to new challenges in different fields.</div>
          <div className="contact">
            <button className="contactButton">CONTACT ME</button>
          </div>
        </div>
        
        <div className="education">
          <div className="title">{`< EDUCATION />`}</div>
          <div className="container">
            <p className="subtitle" id="school">National Taiwan University, Bachelor of Business Administration and Bachelor of Science</p>
            <p className="subtitle" id="major">Double Major in Business Administration and Computer Science</p>
            <p className="remark" id="time">09/2015 ~ 06/2020 (expected)</p>
            <p className="remark" id="city">Taipei, Taiwan</p>
            <hr />
            <p className="subtitle" id="relevant-coursework">Relevant Coursework</p>
            <div className="course" id="ba-related">
              <img
                className="course-icon"
                src={require('../img/ba.png')}
                alt="BA course icon"
              />
            </div>
            <div className="course" id="cs-related">
              <img
                className="course-icon"
                src={require('../img/cs.png')}
                alt="CS course icon"
              />
            </div>
            <div className="course" id="math-related">
              <img
                className="course-icon"
                src={require('../img/math.png')}
                alt="MATH course icon"
              />
            </div>            
          </div>
        </div>
        <div className="experience">
          <div className="title">{`< EXPERIENCE />`}</div>        
        </div>
        <div className="skill">
          <div className="title">{`< TECHNICAL SKILL />`}</div>
        </div>
        <div className="extracurricular">
          <div className="title">{`< EXTRACURRICULAR />`}</div>
        </div>
      </div>
    );
  }
}

export default Homepage;