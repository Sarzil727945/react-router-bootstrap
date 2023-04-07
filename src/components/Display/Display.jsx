import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Display = () => {
     const navigation = useNavigation();
     return (
          <div>
               <Header></Header>
               <div>{navigation.state === 'loading' && <Loader></Loader>}</div>
               <Outlet></Outlet>
          </div>
     );
};

export default Display;