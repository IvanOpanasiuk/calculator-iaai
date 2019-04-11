import React, { Component } from 'react';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="container">
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
        <div className="main">
          <div className="main-delivery">
            <div className="logo-iaai">
              <img src="img/logo-iaai.svg" alt="logo-iaai" />
            </div>
            <div className="main-delivery-content">
              <div className="main-delivery-city">
                <span className="city-from">ORLANDO, FL</span>
                <img className="arrow-image" src="img/arrow.svg" alt="arrow" />
                <span className="city-to">MIAMI, FL</span>
              </div>
              <div className="main-delivery-change">
                <a href="./" className="change-destination">
                  Change Destination
                </a>
              </div>
            </div>
          </div>
          <div className="main-transist">
            <div className="main-transist-container">
              <div className="main-transist-head">
                <span className="main-transist-text">TRANSIT TIME</span>
                <div className="header-option">
                  <span className="mark-question">?</span>
                </div>
              </div>
              <div className="main-transist-days">7-10 days</div>
            </div>
          </div>
          <div className="main-order">
            <div className="main-order-wrapper">
              <div className="main-order-price">
                <div className="main-order-price_text">
                  <span>Guaranteed Quote</span>
                </div>
                <div className="main-oreder-price_number">
                  <span>$549</span>
                </div>
              </div>
              <div className="main-order-button">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
