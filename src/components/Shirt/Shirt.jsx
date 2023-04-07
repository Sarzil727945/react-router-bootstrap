import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Shirt.css';

const Shirt = ({ tShirt, handleAddToCart}) => {
     const {picture, name, price} = tShirt;
     return (
          <div className='col-lg-4 mb-4'>
               <Card className='w-100'>
                    <Card.Img className='images' variant="top" src={picture} />
                    <Card.Body>
                         <Card.Title className='text-center'>{name}</Card.Title>
                         <Card.Text className='text-center'>
                             price: ${price}
                         </Card.Text>
                         <div className='d-flex justify-content-center'>
                              <Button onClick={() =>handleAddToCart(tShirt)} variant="outline-warning">Buy Now</Button>
                         </div>
                    </Card.Body>
               </Card>
          </div>
     );
};

export default Shirt;