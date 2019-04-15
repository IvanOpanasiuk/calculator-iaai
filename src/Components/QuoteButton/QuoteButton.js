import React, { Component } from 'react';
import './QuoteButton.css';

class QuoteButton extends Component {
  render() {
    return (
      <div className="main-quote">
        <div className="quote-wrapper">
          <div className="quote-button">
            <button>Get Quote</button>
          </div>
          <div className="quote-cancel">
            <span>Cancel</span>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteButton;
