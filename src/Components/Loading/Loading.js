import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <div className="loading-body">
          <div className="loading-logo">
            <img className="loading-logo--img" src="img/logo-loading.svg" alt="logo-loading"/>
          </div>
          <div className="loading-content">
            <div className="loading-header">
              <span>EASYHAUL</span>
            </div>
            <div className="loading-text">
              <span>Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
