import React, { Component } from 'react';
import "./OrderPart.css";

class OrderPart extends Component {
  render() {
    return (
      <div className="main-order">
        <div className="main-order-wrapper">
          <div className="main-order-price">
            <div className="main-order-price_text">
              <span>Guaranteed Quote</span>
            </div>
            <div className="main-oreder-price_number">
              <span className="price">$549</span>
            </div>
          </div>
          <div className="main-order-button">
            <button>Order Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderPart;
