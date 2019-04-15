import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import Layout from '../Layout/Layout';
import Loading from '../Loading/Loading';
// import axios from 'axios';
// import InputPage from "../InputPage/InputPage";

const api = 'https://svc.easyhaul.com/api/v1';
// const opt = {
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Credentials': 'true',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin,Content-Type'
//   },
// method: 'GET',
// mode: 'no-cors',
// };

class App extends Component {
  state = {
    isLoading: true,
    data: []
  };

  handleIsLoading = () => {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  };

  componentDidMount() {
    fetch(`${api}/destination-country`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });

    // axios.get(`${api}/destination-country`)
    //   .then((response) => console.log(response)
    // )
  }

  render() {
    const { isLoading } = this.state;
    this.handleIsLoading();
    return (
      <div className="App">
        <div className={`wrapp ${isLoading ? 'wrapp-loading-color' : ''}`}>
          {isLoading ? <Loading /> : <Layout />}
        </div>
      </div>
    );
  }
}

export default App;
