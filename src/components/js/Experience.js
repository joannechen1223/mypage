import React, { Component } from 'react';
import '../css/Experience.css';

class Experience extends Component {
  render() {
    return (
      <div className="experience-item">
        
          
        <div className="content">
          <div className="subtitle" id="name">IT Specialist - System Analyst Intern</div>
          <div className="subtitle" id="organization">IBM  Global Business Service Dept.</div>
          <div className="subtitle" id="project-description">Projects of Mobile / Global Corporate Internet Bank System Development</div>
          <div className="remark" id="time">07/2018 ~ present</div>
          <div className="remark" id="city">Taipei, Taiwan</div>
          <p className="responsibility">- Coordinate with stakeholders and development team in project environment.</p>
          <p className="responsibility">- Perform system integration testing and deliver testing reports.</p>
          <p className="responsibility">- Produce or modify design documents to be followed by developers.</p>
          <p className="responsibility">- Assist in preparing documents for milestone reviews and stakeholder reviews.</p>
          <p className="responsibility">- Communicate with developers for bugs tracking, and provide insights in requirement elicitation.</p>
        </div>
        <div style={{clear: "both"}}></div>
      </div>
    );
  }
}

export default Experience;