import React, { Component } from 'react';
import ModalWindow from '../ModalWindow';
import { MainConsumer } from '../../contexts/ContextMain';
import './BannerInfo.css';

class BannerInfo extends Component {
  render() {
    return (
      <ModalWindow domNode={document.querySelector('#modal')}>
        <MainConsumer>
          {({ toggleModalInfo }) => (
            <div className='banner-info-wrapp'>
              <div className='banner-info-container'>
                <div className='banner-info-body'>
                  <div className='banner-info-logo'>
                    <img
                      className='banner-info-logo--img'
                      src='img/icon-ship.svg'
                      alt='logo-banner-info'
                    />
                  </div>
                  <div className='banner-info-content'>
                    <div className='banner-info-text'>
                      <span>
                        Rates are based on LCL consolidating one car out of 4 in
                        a 40ft container. EasyHaul has 1-7 days to pick up
                        vehicles, the average pick up time is 3- 4 business
                        days.
                      </span>
                    </div>
                  </div>
                  <div onClick={toggleModalInfo} className='close-window'>
                    X
                  </div>
                </div>
              </div>
            </div>
          )}
        </MainConsumer>
      </ModalWindow>
    );
  }
}

export default BannerInfo;
