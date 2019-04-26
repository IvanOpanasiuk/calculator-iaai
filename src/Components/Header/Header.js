import React, { Component } from 'react';
import './Header.css';
import { MainConsumer } from '../../contexts/ContextMain';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-title">
          <img src="img/logo.svg" alt="logo" className="header-title-logo" />
          <span className="header-title_guaranteed">
            GUARANTEED SHIPING QUOTE
          </span>
          <MainConsumer>
            {({make, model, year}) => (
              <span className="header-title_name-car">{`${year} ${make} ${model}`}</span>
            )
            }
          </MainConsumer>
        </div>
        <MainConsumer>
        {
          ({ toggleModalAbout }) => (
            <div className="header-option" onClick={toggleModalAbout} >
              <span className="mark-question">?</span>
            </div>
          )
        }
        </MainConsumer>
        
      </div>
    );
  }
}

export default Header;
