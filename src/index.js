import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Component/Page/Home/Home';
import Notfound from './Component/Page/Notfound/Notfound';
const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
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
