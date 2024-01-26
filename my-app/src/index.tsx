import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './screens/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './screens/contact';
import StationName from './screens/station/station-page';
import AdminPage from './screens/admin/admin-page';
import Service from './screens/service/service';
import ContactPage from './screens/contact/contact-page';
import { Test } from './screens/test';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Test/>,
  },

  { 
    path: "/home",
    element: <Home/>,
  },

  { 
    path: "/stations/:station/:inout",
    element: <StationName/>,
    // path: "/stations/:station/:inout",
    // element: <StationName/>,
  },

  { 
    path: "/stations",
    element: <StationName/>,
    // path: "/stations/:station/:inout",
    // element: <StationName/>,
  },
  

  { 
    path: "/contact",
    element: <ContactPage />,
  },

  {
    path: "/admin",
    element: <AdminPage/>
  },

  {
    path: "/services",
    element: <Service/>
  }

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
