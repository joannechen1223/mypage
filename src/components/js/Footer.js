import React, { Component } from 'react';
import '../css/Footer.css'

class Footer extends Component {
  
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-contact">
          b04701232@ntu.edu.tw &nbsp;|&nbsp; joannechen1223@gmail.com &nbsp;|&nbsp;  (+886)958009612 <br/>
          Copyright © 2019. All Rights Reserved
          </div>
          <div className="hyperlink">
            <a href="https://github.com/joannechen1223" target="Starfall">
            <img
              className="hyperlink-icon"
              src={require('../img/github-logo.png')}
              alt="linkedin"
            />
            </a>
            <a href="https://www.linkedin.com/in/joanne-chen-303a9015a/" target="Starfall">
            <img
              className="hyperlink-icon"
              src={require('../img/linkedin-logo.png')}
              alt="github"
            />
            </a>
          </div>
        </div> 
      </div>
    );
  }
}

export default Footer;