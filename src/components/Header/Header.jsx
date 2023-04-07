import React from 'react';
import './Header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
     return (
          <div>
               <Navbar bg="light" expand="lg" className='p-3 mb-2'>
                    <Container fluid className='container'>
                         <Navbar.Brand href="#" className='fs-4'>Navbar scroll</Navbar.Brand>
                         <Navbar.Toggle aria-controls="navbarScroll" />
                         <Navbar.Collapse id="navbarScroll">
                              <Nav
                                   className="me-auto my-2 my-lg-0"
                                   style={{ maxHeight: '100px' }}
                                   navbarScroll
                              >
                                   <ActiveLink to="/">Home</ActiveLink>
                                   <ActiveLink to="/about">About</ActiveLink>
                                   <ActiveLink to="/order">Order Review</ActiveLink>
                                   <ActiveLink to="/contact" >Contact</ActiveLink>
                              </Nav>
                              <Form className="d-flex">
                                   <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                   />
                                   <Button variant="outline-success">Search</Button>
                              </Form>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;