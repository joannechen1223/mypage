import React, { Component } from 'react';
import '../css/Popup.css';

class Popup extends Component {
  constructor() {
    super();
  }
  render() {
    const display = this.props.display;
    console.log(display);
    return (
      <div id="myModal" className="modal" style={{display: `${display}`}}>
        <div className="modal-content">
          <div className="content-block" id="close-cross">
            <span
              className="close"
              onClick={this.props.handleContactClose}
            >&times;</span>
          </div>
          <div className="content-block" id="email">
            <img
              className="contact-icon"
              src={require('../img/email.png')}
              alt="email"
            />
            <p className="contact-content">b04701232@ntu.edu.tw / <br />joannechen1223@gmail.com</p>
          </div>
          <div className="content-block"  id="phone">
            <img
              className="contact-icon"
              src={require('../img/phone.png')}
              alt="phone"
            />
            <p className="contact-content">(+886) 958009612</p>
          </div>
          <div className="content-block" id="close-button-id">
            <button
              className="close-button"
              onClick={this.props.handleContactClose}
            >CLOSE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;