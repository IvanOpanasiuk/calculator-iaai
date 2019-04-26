import React, { Component, Fragment } from 'react';
// import { Switch, Route } from 'react-router-dom'
import { MainConsumer } from '../../contexts/ContextMain';
import DeliveryPart from '../DeliveryPart';
import TransitPart from '../TransitPart';
import OrderPart from '../OrderPart';
import InputPage from '../InputPage';
import InternationalShipping from '../InternationalShipping';
import QuoteButton from '../QuoteButton';

import './MainContent.css';


class MainContent extends Component {
  render() {
    return (
      <div className="main">
        <MainConsumer>
          {
            ({ changeDestinantion, handleGetQuote, loadingQuote }) => (
              // loadingQuote ? <Loading /> : (
                changeDestinantion ? (
                  <Fragment>
                    <InputPage handleGetQuote={handleGetQuote} />
                    <InternationalShipping />
                    <QuoteButton />
                  </Fragment>
                ) : (
                    <Fragment>
                      <DeliveryPart />
                      <TransitPart />
                      <OrderPart />
                    </Fragment>
                  )
              // )
            )
          }
        </MainConsumer>
      </div>
    );
  }
}

export default MainContent;
