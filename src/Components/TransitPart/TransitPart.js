import React, { Component } from 'react';
import { MainConsumer } from '../../contexts/ContextMain';
import './TransitPart.css';

class TransitPart extends Component {
  render() {
    return (
      <MainConsumer>
        {({ toggleModalInfo, quotaParameters }) => (
          <div className='main-transit'>
            <div className='main-transit-container'>
              <div className='main-transit-head'>
                <span className='main-transit-text'>TRANSIT TIME</span>
                <div onClick={toggleModalInfo} className='header-option'>
                  <span className='mark-question'>?</span>
                </div>
              </div>
              <div className='main-transit-days'>
                {quotaParameters.transit_time}
              </div>
            </div>
          </div>
        )}
      </MainConsumer>
    );
  }
}

export default TransitPart;
