import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';

const basename =
  process.env.NODE_ENV === "production"
    ? "/DungLe-Portfolio"
    : "/"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter
    basename={basename}
  >
    <App />
  </BrowserRouter>
);
