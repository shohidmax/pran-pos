import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Component/Page/Home/Home';
import Notfound from './Component/Page/Notfound/Notfound';
import Sales from './Component/Inventry/Sales/Sales';
import Requireauth from './Component/Auth/Requireauth';
import Login from './Component/Page/Login/Login';
import SignUp from './Component/Auth/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
  },
  {
    path: "/home",
    element: (<Home/>),
  },
  {
    path: "/sales",
    element: (<Requireauth><Sales/></Requireauth>),
  },
  {
    path: "login",
    element: (<Login/>),
  },
  {
    path: "signup",
    element: (<SignUp/>),
  },
  {
    path: "about",
    element: <div>About.............</div>,
  },
  {
    path: "*",
    element: (<Notfound/>),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
