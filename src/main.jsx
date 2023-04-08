import React from 'react'
import ReactDOM from 'react-dom/client'
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
import News from './components/News/News';
import OrderReview from './components/OrderReview/OrderReview';

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
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path:'*',
        element: <h1 className='text-center mt-5 pt-5'>404</h1>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
