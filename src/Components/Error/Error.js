import React, { Component } from 'react';
import ModalWindow from '../ModalWindow';
import { MainConsumer } from '../../contexts/ContextMain';
import './Error.css';

class Error extends Component {
    render() {
        return (
          <ModalWindow domNode={document.querySelector("#modal")}>
            <MainConsumer>
              {({ toggleModalErr }) => (
                
                <div className="banner-err-wrapp">
                  <div className="banner-err-container">
                    <div className="banner-err-body">
                      <div className="banner-err-content">
                        <div className="banner-err-text">
                          <span>Erorr code goes here</span>
                          <span>Please try again</span>
                        </div>
                      </div>
                      <div
                        onClick={toggleModalErr}
                        className="close-err-window"
                      >
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

export default Error;
