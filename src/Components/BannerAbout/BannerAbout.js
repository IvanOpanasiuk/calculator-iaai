import React, { Component } from 'react';

import ModalWindow from "../ModalWindow";
import { MainConsumer } from "../../contexts/ContextMain";
import "./BannerAbout.css";

class BannerAbout extends Component {
    render() { 
        return ( 
            <ModalWindow domNode={document.querySelector("#modal")}>
                <MainConsumer>
                    {
                        ({ toggleModalAbout }) => (
                            <div className="banner-info-wrapp">
                                <div className="banner-info-container">
                                    <div className="banner-info-body">
                                        <div className="banner-info-logo">
                                            <img className="banner-info-logo--img" src="img/logo-info-banner.svg" alt="logo-banner-info" />
                                        </div>
                                        <div className="banner-info-content">
                                            <div className="banner-info-text">
                                                <span>EasyHaul provides domestic and international shipping for over 6 years.  EasyHaul partners directly with Insurance Auto Auctions but it is not part of Insurance Auto Auctions.</span>
                                            </div>
                                        </div>
                                        <div onClick={toggleModalAbout} className="close-window">
                                        X
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                </MainConsumer>
            </ModalWindow>
         );
    }
}
 
export default BannerAbout;