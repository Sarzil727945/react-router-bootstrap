import React from 'react';
import './Header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

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
                                   <Link to="/" className='text-dark mx-3 navStyle '>Home</Link>
                                   <Link to="/about" className='text-dark mx-3 navStyle'>About</Link>
                                   <Link to="/order" className='text-dark mx-3 navStyle '>Order Review</Link>
                                   <Link to="/contact" className='text-dark mx-3 navStyle'>Contact</Link>
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