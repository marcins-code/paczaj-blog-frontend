import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalTemplate from './templates/GlobalTemplate';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalTemplate>
        <App />
      </GlobalTemplate>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
