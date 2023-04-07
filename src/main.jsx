import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Display from './components/Display/Display';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import OrderReview from './components/OrderReview/OrderReview';
import TShirt from './components/tShirt/tShirt';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Display></Display>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("tShirts.json")
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/order",
        element: <OrderReview></OrderReview>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
