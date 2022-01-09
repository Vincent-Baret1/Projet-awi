import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import ListIngredientsPage from './ListIngredientsPage';
import HomePage from './HomePage/HomePage';
import PageVisitor from './PageVisitor';
import ProgressionForm from './components/ProgressionForm';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/FicheTechniquePage" element={<ProgressionForm />} />
      <Route path="/ListIngredientsPage" element={<ListIngredientsPage />} />
      <Route path="/App" element={<App />} />
      <Route path="/PageVisitor" element={<PageVisitor />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
