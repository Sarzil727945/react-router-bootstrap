import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shirt from '../Shirt/Shirt';
import ResultCart from '../ResultCart/ResultCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
     const tShirtsData = useLoaderData();

     const [cart, setCart] = useState([]);
     const [prices, setPrices] = useState(0);
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

               const totalPrices = prices + tShirt.price;
               setPrices(totalPrices)
          }   
     }
     // cart add end 
 
     // cart remove start 
     const handelRemoveToCart = (shirt) =>{
          const {_id, price} = shirt;
          const remaining = cart.filter(ts => ts._id !== _id);
          setCart(remaining)

          const TotalPrice = prices - price;
          setPrices(TotalPrice)
          
     }
     // cart remove end 

     return (
          <div className='row mx-lg-3 mt-5 pt-2'>
               <div className='col-lg-9 mt-5'>
                    <div className='row'>
                         {
                              tShirtsData.map(tShirt => <Shirt
                                   key={tShirt._id}
                                   tShirt={tShirt}
                                   handleAddToCart={handleAddToCart}
                                   // price = {prices}
                              ></Shirt>)
                         }
                    </div>
               </div>
               <div className='col-lg-3 mt-3 mt-lg-5'>
                    <ResultCart 
                    cart={cart}
                    handelRemoveToCart={handelRemoveToCart}
                    price={prices}
                    ></ResultCart>
               </div>
               <ToastContainer></ToastContainer>
          </div>
     );
};

export default Home;