import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Photos from './pages/Photos';
import Contact from './pages/Autorizari';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "photos",
    element: <Photos />,
  },
  {
    path: "autorizari",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));	
root.render(
  <RouterProvider router= { router } />
);
