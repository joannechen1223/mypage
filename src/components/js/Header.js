import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header" id="title">Joanne's Website</div>
        <a className="CV-download" href={require('../file/CV.pdf')} download="Jou_An_Chen_CV.pdf">
          CV
        </a>
      </div>
    );
  }
}

export default Header;