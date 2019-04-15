import React, { Component } from 'react';

import './Layout.css';

import Header from '../Header';
import MainContent from '../MainContent';

class Layout extends Component {
  state={
    changeDestinantion: false
  }
  handleChangeDestinantion = () => {
    this.setState({changeDestinantion: !this.state.changeDestinantion});
  }
  render() {
    return (
      <div className="container">
        <Header />
        <MainContent handleChangeDestinantion={this.handleChangeDestinantion} changeDestinantion={this.state.changeDestinantion} />
      </div>
    );
  }
}

export default Layout;
