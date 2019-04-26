import React, { Component } from 'react';
import { MainConsumer } from "../../contexts/ContextMain";
import 'normalize.css';
// components
import Layout from '../Layout/Layout';
import Loading from '../Loading/Loading';
// style
import './App.css';

class App extends Component {
  render() {
    return (
      <MainConsumer>
        {({ isLoading }) => (
          <div className="App">
            <div
              className={`wrapp ${isLoading ? "wrapp-loading-color" : ""}`}
            >
              <div className="container">
                {isLoading ? <Loading /> : <Layout />}
              </div>
              <div id="modal" />
            </div>
          </div>
        )}
      </MainConsumer>
    );
  }
}

export default App;