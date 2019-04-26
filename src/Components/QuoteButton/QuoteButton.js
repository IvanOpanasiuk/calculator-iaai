import React, { Component } from 'react';
import { MainConsumer } from '../../contexts/ContextMain';
import './QuoteButton.css';

class QuoteButton extends Component {
  render() {
    return (
      <MainConsumer>
        {
          ({ handleGetQuote, handleQuoteCancel})=>(
            <div className="main-quote">
              <div className="quote-wrapper">
                <div className="quote-button">
                  <button onClick={handleGetQuote}>Get Quote</button>
                </div>
                <div className="quote-cancel">
                  <span onClick={handleQuoteCancel}>Cancel</span>
                </div>
              </div>
            </div>
          )
        }
      </MainConsumer>
      
    );
  }
}

export default QuoteButton;
