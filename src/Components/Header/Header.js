import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-title">
          <img src="img/logo.svg" alt="logo" className="header-title-logo" />
          <span className="header-title_guaranteed">
            GUARANTEED SHIPING QUOTE
          </span>
          <span className="header-title_name-car">2016 VOLKSWAGEN GOLF</span>
        </div>
        <div className="header-option">
          <span className="mark-question">?</span>
        </div>
      </div>
    );
  }
}

export default Header;
