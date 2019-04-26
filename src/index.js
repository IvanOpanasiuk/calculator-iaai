import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './Components/App/App';
import { MainProvider, MainConsumer } from './contexts/ContextMain';

ReactDOM.render(
  <BrowserRouter>
    <MainProvider>
      <MainConsumer>
        {
          ({ countries, isLoading}) => {
          return (
            <App isLoading={isLoading} countries={countries} />
          )
        }
        }
      </MainConsumer>
    </MainProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
