import React, { Component } from 'react';
import 'normalize.css';
import "./App.css"
import Layout from "../Layout/Layout";
// import Loading from '../Loading/Loading';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapp">
          <Layout />
        </div>
      </div>
    );
  }
}

export default App;
