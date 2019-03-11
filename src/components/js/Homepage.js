import React, { Component } from 'react';
import '../css/Homepage.css';

class Homepage extends Component {
  
  render() {
    
    return (
      <div className="homepage">
        <div className="self-intro">I am Joanne</div>
        <div className="slogan">slogan</div>
        <div className="education">education</div>
        <div className="experience">experience</div>
        <div className="skill">skill</div>
        <div className="extracurricular">extracurricular</div>
      </div>
    );
  }
}

export default Homepage;