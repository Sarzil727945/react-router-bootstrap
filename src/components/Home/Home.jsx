import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shirt from '../Shirt/Shirt';
import ResultCart from '../ResultCart/ResultCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
     const tShirtsData = useLoaderData();

     const [cart, setCart] = useState([]);
     // cart add start
     const handleAddToCart = (tShirt) => {
          const exists = cart.find(ts => ts._id === tShirt._id);
          if(exists){
               const notify = () => toast("This is already selected!");
               notify();
          }
          else{
               const newCart = [...cart, tShirt]
               setCart(newCart);
          }
     }
     // cart add end 

     // cart remove start 
     const handelRemoveToCart = (id) =>{
          const remaining = cart.filter(ts => ts._id !== id);
          setCart(remaining)
     }
     // cart remove end 

     return (
          <div className='row mx-lg-3'>
               <div className='col-lg-9'>
                    <div className='row'>
                         {
                              tShirtsData.map(tShirt => <Shirt
                                   key={tShirt._id}
                                   tShirt={tShirt}
                                   handleAddToCart={handleAddToCart}
                              ></Shirt>)
                         }
                    </div>
               </div>
               <div className='col-lg-3 mt-3'>
                    <ResultCart 
                    cart={cart}
                    handelRemoveToCart={handelRemoveToCart}
                    ></ResultCart>
               </div>
               <ToastContainer></ToastContainer>
          </div>
     );
};

export default Home;