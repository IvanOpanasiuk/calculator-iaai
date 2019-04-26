import React from 'react';
import { MainConsumer } from '../../contexts/ContextMain';
// import { Router, Route, Link, RouteHandler } from 'react-router';

import './OrderPart.css';

const OrderPart = () => {
  const redirectToTarget = () => {

  }
  const handleFormatNumber = num => num.toLocaleString("en-IN");
  return (
    <MainConsumer>
      {({ quotaParameters }) => (
        <div className="main-order">
          <div className="main-order-wrapper">
            <div className="main-order-price">
              <div className="main-order-price_text">
                <span>Guaranteed Quote</span>
              </div>
              <div className="main-oreder-price_number">
                <span className="price">
                  ${handleFormatNumber(quotaParameters.total_quote)}
                </span>
              </div>
            </div>
            <div className="main-order-button">
              <button onClick={redirectToTarget}>Order Now</button>
            </div>
          </div>
        </div>
      )}
    </MainConsumer>
  );
}

export default OrderPart;
