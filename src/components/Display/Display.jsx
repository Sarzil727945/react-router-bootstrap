import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

const Display = () => {
     const navigation = useNavigation();
     return (
          <div>
               <Header></Header>
               <div>{navigation.state === 'loading' && <Loader></Loader>}</div>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Display;