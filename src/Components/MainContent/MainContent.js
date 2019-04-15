import React, { Component, Fragment } from 'react';
// import { Switch, Route } from 'react-router-dom'
import './MainContent.css';

import DeliveryPart from '../DeliveryPart';
import TransitPart from '../TransitPart';
import OrderPart from '../OrderPart';
import InputPage from '../InputPage';
import InternationalShipping from '../InternationalShipping';
import QuoteButton from '../QuoteButton';


class MainContent extends Component {
  render() {
      const {changeDestinantion, handleChangeDestinantion} = this.props;
    return (
      <div className="main">
        {changeDestinantion ? (
          <Fragment>
            <InputPage />
            <InternationalShipping />
            <QuoteButton />
          </Fragment>
        ) : (
            <Fragment>
              <DeliveryPart handleChangeDestinantion={handleChangeDestinantion} />
              <TransitPart />
              <OrderPart />
            </Fragment>
          )}
      </div>
    );
  }
}

export default MainContent;
