import React from 'react';
import { Button } from 'react-bootstrap';
import './ResultCart.css'
import { XMarkIcon } from '@heroicons/react/24/solid'


const ResultCart = ({ cart, handelRemoveToCart }) => {
     let massage;
     cart.length === 0 ? massage = <p className='text-danger'>Please add some product</p> : massage = <p className='text-success'>Thank you so much</p>;
     return (
          <div className='p-3 rounded'>
               <h2 className={`text-center p-4 rounded ${cart.length !==0? 'bg-secondary':'bg-light'}`}>Order Summary: {cart.length}</h2>
               <div className='text-center'>
                    {massage}
               </div>
               {
                    cart.map(shirt => <p className='text-center'
                         key={shirt._id}>
                         {shirt.name}
                         <Button onClick={() => handelRemoveToCart(shirt._id)} variant="light">
                              <XMarkIcon className='icon' />
                         </Button>
                    </p>)
               }
          </div>
     );
};

export default ResultCart;