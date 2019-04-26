import React, { Component, Fragment } from 'react';
//components
import Header from '../Header';
import MainContent from '../MainContent';
import { MainConsumer } from '../../contexts/ContextMain';
import BannerAbout from '../BannerAbout';
import BannerInfo from '../BannerInfo';
import Error from '../Error';
//style
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <MainConsumer>
        {({ showModalAbout, showModalInfo, errorClient }) => {
          if (showModalAbout) {
            return <BannerAbout />;
          } else if (errorClient) {
            return <Error />;
          } else if (showModalInfo) {
            return <BannerInfo />;
          } else {
            return (
              <Fragment>
                <Header />
                <MainContent />
              </Fragment>
            );
          }
        }}
      </MainConsumer>
    );
  }
}

export default Layout;
