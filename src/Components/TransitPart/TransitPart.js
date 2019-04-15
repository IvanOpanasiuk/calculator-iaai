import React, { Component } from 'react';
import './TransitPart.css';

class TransitPart extends Component {
  render() {
    return (
      <div className="main-transit">
        <div className="main-transit-container">
          <div className="main-transit-head">
            <span className="main-transit-text">TRANSIT TIME</span>
            <div className="header-option">
              <span className="mark-question">?</span>
            </div>
          </div>
          <div className="main-transit-days">7-10 days</div>
        </div>
      </div>
    );
  }
}

export default TransitPart;
