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
          <span
            className="close"
            onClick={this.props.handleContactClose}
          >&times;</span>
          <p>Phone: 0958009612</p>
          <p>Email: b04701232@ntu.edu.tw / joannechen1223@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Popup;