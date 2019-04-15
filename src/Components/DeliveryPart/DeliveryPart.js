import React, { Component } from 'react';
import './DeliveryPart.css';

class DeliveryPart extends Component {
  render() {
    return (
        <div className="main-delivery">
        <div className="logo-iaai">
          <img src="img/logo-iaai.svg" alt="logo-iaai" />
        </div>
        <div className="main-delivery-content">
          <div className="main-delivery-city">
            <div className="main-delivery-city_wrap">
              <div className="city-list">
                <span className="city-from">ORLANDO, FL</span>
                <img className="arrow-image" src="img/arrow.svg" alt="arrow" />
                <span className="city-to">MIAMI, FL</span>
              </div>
              <div className="order-delivery">
                <span>$440</span>
              </div>
            </div>
            <div className="main-delivery-city_wrap">
              <div className="city-list">
                <span className="city-from">ORLANDO, FL</span>
                <img className="arrow-image" src="img/arrow.svg" alt="arrow" />
                <span className="city-to">MIAMI, FL</span>
              </div>
              <div className="order-delivery">
                <span>$440</span>
              </div>
            </div>
          </div>
            <a href="#" onClick={this.props.handleChangeDestinantion} className="change-destination">
              Change Destination
            </a>
        </div>
      </div>
    );
  }
}

export default DeliveryPart;
