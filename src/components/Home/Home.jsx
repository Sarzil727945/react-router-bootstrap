import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
     const tShirtsData = useLoaderData();
     console.log(tShirtsData);
     return (
          <div>
               <h1>This is Home: {tShirtsData.length}</h1>
          </div>
     );
};

export default Home;