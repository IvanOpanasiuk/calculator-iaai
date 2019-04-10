import React, { Component } from 'react';
import './Layout.css'

class Layout extends Component {
    render() { 
        return ( 
            
                <div className="container">
                    <div className="calc-header">GUARANTEED SHIPPING QUOTE {`SOME CAR`}</div>
                    <div className="calc-main">
                        <div className="calc-main-delivery">calc-main-delivery</div>
                        <div className="calc-main-transist">calc-main-transist</div>
                        <div className="calc-main-order">calc-main-order</div>
                    </div>
                </div>
         );
    }
}
 
export default Layout;