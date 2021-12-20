import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import FicheTechniquePage from './FicheTechniquePage';
import ListIngredientsPage from './ListIngredientsPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/FicheTechniquePage" element={<FicheTechniquePage />} />
      <Route path="/ListIngredientsPage" element={<ListIngredientsPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
