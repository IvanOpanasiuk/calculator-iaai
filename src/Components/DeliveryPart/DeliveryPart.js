import React, { Component, Fragment } from 'react';
import { MainConsumer } from '../../contexts/ContextMain';
import './DeliveryPart.css';

class DeliveryPart extends Component {
  render() {
    return (
      <MainConsumer>
        {({ handleChangeDestinantion, countryState }) => (
          <div className="main-delivery">
            <div className="logo-iaai">
              <img src="img/logo-iaai.svg" alt="logo-iaai" />
            </div>
            <div className="main-delivery-content">
              <div className="main-delivery-city">
                <MainConsumer>
                  {({
                    zip,
                    addressClient,
                    addressVehicle,
                    nearestUSAPort,
                    quotaParameters,
                  }) => {
                    if (countryState && countryState.type === "I") {
                      return (
                        <Fragment>
                          <div className="main-delivery-city_wrap">
                            <div className="city-list">
                              <span className="city-from">{`${
                                addressVehicle.city
                              }, ${addressVehicle.state_code}`}</span>
                              <img
                                className="arrow-image"
                                src="img/arrow.svg"
                                alt="arrow"
                              />
                              <span className="city-to">{`${
                                nearestUSAPort.name
                              }`}</span>
                            </div>
                            <div className="order-delivery">
                              <span>{`$${
                                quotaParameters.ground_quote
                              }`}</span>
                            </div>
                          </div>
                          <div className="main-delivery-city_wrap">
                            <div className="city-list">
                              <span className="city-from">{`${
                                nearestUSAPort.name
                              }`}</span>
                              <img
                                className="arrow-image"
                                src="img/arrow.svg"
                                alt="arrow"
                              />
                              <span className="city-to">{`${
                                countryState.name
                              }, ${addressClient.name}`}</span>
                            </div>
                            <div className="order-delivery">
                              <span>{`$${
                                quotaParameters.ocean_quote
                              }`}</span>
                            </div>
                          </div>
                        </Fragment>
                      );
                    } else {
                      return (
                        <div className="main-delivery-city_wrap">
                          <div className="city-list">
                            <span className="city-from">{`${
                              addressVehicle.city
                            }, ${addressVehicle.state_code}`}</span>
                            <img
                              className="arrow-image"
                              src="img/arrow.svg"
                              alt="arrow"
                            />
                            <span className="city-to">{`${
                              addressClient.city
                            }, ${addressClient.state_code}`}</span>
                          </div>
                        </div>
                      );
                    }
                  }}
                </MainConsumer>
              </div>
              <a
                href="#"
                onClick={handleChangeDestinantion}
                className="change-destination"
              >
                {countryState.type === "D"
                  ? "Change Destination"
                  : "Change Country"}
              </a>
            </div>
          </div>
        )}
      </MainConsumer>
    );
  }
}

export default DeliveryPart;
