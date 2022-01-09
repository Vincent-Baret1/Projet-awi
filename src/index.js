import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import FicheTechniquePage from './FicheTechniquePage';
import ListIngredientsPage from './ListIngredientsPage';
import HomePage from './HomePage/HomePage';
import PageVisitor from './PageVisitor';
import { useAuthState, AuthContextProvider, } from './firebase';



const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`AuthenticatedRoute: ${isAuthenticated}`)
  return (
    <Routes>
      <Route
      {...props}
      render={routeProps =>
        isAuthenticated ? <C {...routeProps} /> : <Navigate to="/login" />
      }
    />
    </Routes>
  )
}

const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
  return (
    <Routes>
      <Route
      {...props}
      render={routeProps =>
        !isAuthenticated ? <C {...routeProps} /> : <Navigate to="/" />
      }
    />
    </Routes>
    

  )
}

ReactDOM.render(

  <AuthContextProvider>
    <BrowserRouter>
        <AuthenticatedRoute path="/" element={<HomePage />} />
        <UnauthenticatedRoute path="/LoginPage" element={<LoginPage />} />
        <AuthenticatedRoute path="/FicheTechniquePage" element={<FicheTechniquePage />} />
        <AuthenticatedRoute path="/ListIngredientsPage" element={<ListIngredientsPage />} />
        <AuthenticatedRoute path="/App" element={<App />} />
        <UnauthenticatedRoute path="/PageVisitor" element={<PageVisitor />} />
    </BrowserRouter>
  </AuthContextProvider>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
