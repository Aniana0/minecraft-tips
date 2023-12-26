import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from './pages/SignUp';
import MenuSelectTip from './pages/MenuSelectTip';
import NotFound from './pages/NotFound';
import LogIn from './pages/LogIn';
import TipOreYLabel from './pages/TipOreYLabel';
import MenuAccountState from './pages/MenuAccountState';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <MenuSelectTip />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/account",
        element: <MenuAccountState />
      },
      {
        path: "/ore_y_level",
        element: <TipOreYLabel />
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
