import React, { Component } from 'react';
import Experience from './Experience';
import Popup from './Popup';
import Footer from './Footer';
import '../css/Homepage.css';



class Homepage extends Component {
  constructor(){
    super();
    this.state = {
      popupDisplay: 'none',
    }

    this.handleContactButtonClick = this.handleContactButtonClick.bind(this);
    this.handleContactClose = this.handleContactClose.bind(this);
  }

  handleContactButtonClick() {
    this.setState({
      popupDisplay: 'block',
    });
  }

  handleContactClose() {
    console.log("in handleContactClose");
    this.setState({
      popupDisplay: 'none',
    });
  }

  render() {
    const popupStyle = {display: "none",};
    console.log(popupStyle);
    return (
      <div className="homepage">
        <div className="self-intro">
          <p className="title">JOU-AN (JOANNE) CHEN</p>
          <div className="subtitle"><b>Always Prepared to be Amazed.</b></div>
          <div className="content">Hi! I am Joanne, a college student as well as a self learner in web development. I am interested in the industries of technology and finance, and looking forward to new challenges in different fields.</div>
          <div className="contact">
            <button
              className="contactButton"
              onClick={this.handleContactButtonClick}
            >CONTACT ME</button>
          </div>
        </div>
        <Popup
          display={this.state.popupDisplay}
          handleContactButtonClick={this.handleContactButtonClick}
          handleContactClose={this.handleContactClose}
        />
        <div className="education">
          <div className="title">{`< EDUCATION />`}</div>
          <div className="container">
            <p className="subtitle" id="school">National Taiwan University, Bachelor of Business Administration and Bachelor of Science</p>
            <p className="subtitle" id="major">Double Major in Business Administration and Computer Science</p>
            <p className="remark" id="time">09/2015 ~ 06/2020 (expected)</p>
            <p className="remark" id="city">Taipei, Taiwan</p>
            <hr />
            <div className="subtitle" id="relevant-coursework">Relevant Coursework</div>
            <div className="course" id="ba-related">
              <div className="course-icon-div">
                <img
                    className="course-icon"
                    src={require('../img/ba.png')}
                    alt="BA course icon"
                />
              </div>
              <div className="course-content">
                <p className="course-related-tile">BA Related</p>
                <p className="course-name">Finacial Accounting, Marketing Management, Operating Management, Cost Accounting, Project Management, Strategic Management</p>
              </div>
              <div style={{clear: "both"}}></div>
            </div>
            <div className="course" id="cs-related">
              <div className="course-icon-div">
                <img
                    className="course-icon"
                    src={require('../img/cs.png')}
                    alt="CS course icon"
                />
              </div>
              <div className="course-content">
                <p className="course-related-tile">CS Related</p>
                <p className="course-name">Data Structure, Algorithm Design and Analysis, System Programming, Operating System, Computer Network, Computer Architecture, Machine Learning, Database Management</p>
              </div>
              <div style={{clear: "both"}}></div>
            </div>
            <div className="course" id="math-related">
              <div className="course-icon-div">
                <img
                    className="course-icon"
                    src={require('../img/math.png')}
                    alt="MATH course icon"
                />
              </div>
              <div className="course-content">
                <p className="course-related-tile">MATH & STATISTIC Related</p>
                <p className="course-name">Calculus, Linear Algebra, Statistic and Probability, Discrete Mathematics</p>
              </div>
              <div style={{clear: "both"}}></div>
            </div>            
          </div>
        </div>
        <div className="experience">
          <div className="title">{`< EXPERIENCE />`}</div>
          <div className="container">
            <Experience />
          </div>
        </div>
        <div className="skill">
          <div className="title">{`< TECHNICAL SKILL />`}</div>
        </div>
        <div className="extracurricular">
          <div className="title">{`< EXTRACURRICULAR />`}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;