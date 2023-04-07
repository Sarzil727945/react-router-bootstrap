import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Display = () => {
     return (
          <div>
               <Header></Header>
               <Outlet></Outlet>
          </div>
     );
};

export default Display;