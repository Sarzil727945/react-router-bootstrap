import React from 'react';
import './Footer.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { HomeIcon, EnvelopeIcon, PhoneIcon, } from '@heroicons/react/24/solid'

const Footer = () => {
     return (
          <div>
               <footer className="footer container-fluid mt-5">
                    <div className="container p-2">
                         <div className="row d-flex">
                              <div className="col-lg-4">
                                   <div className="skk mx-lg-3">
                                        <div className="sm">
                                             <h2 className="text-info mt-4 text-center">Office Address</h2>
                                        </div>
                                        <p className="text-justify mt-4 text-light ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                                             tempore animi quam in</p>
                                        <ul className="list-unstyled ms-2">
                                             <li>
                                                  <p className='d-flex align-content-center'>
                                                       <HomeIcon className="icon text-light" />
                                                       <span className="text-light ms-2">
                                                            Dhaka
                                                            Bangladesh</span></p>
                                             </li>
                                             <li>
                                                  <p className='d-flex align-content-center'>
                                                       <EnvelopeIcon className='icon text-light' />
                                                       <span className="text-light ms-2">
                                                            sarzilmuntaha@gmail.com</span></p>
                                             </li>
                                             <li>
                                                  <p className='d-flex align-content-center'><PhoneIcon className='icon text-light' /> <span className="text-light ms-2">
                                                       01893254443</span></p>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-lg-4">
                                   <div className="mx-lg-3 ps-lg-5">
                                        <div className="sm">
                                             <h2 className="text-info mt-4 text-center">GET IN TOUCH</h2>
                                        </div>
                                        <ul className="list-unstyled mt-4 linkStyle">
                                             <li>
                                                  <ActiveLink to="/">Home</ActiveLink>
                                             </li>
                                             <li>
                                                  <ActiveLink to="/about">About</ActiveLink>
                                             </li>
                                             <li>
                                                  <ActiveLink to="/order">Order Review</ActiveLink>
                                             </li>
                                             <li>
                                                  <ActiveLink to="/news">News</ActiveLink>
                                             </li>
                                             <li>
                                                  <ActiveLink to="/contact" >Contact</ActiveLink>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-lg-4">
                                   <div className="ps-lg-3">
                                        <div className="sm">
                                             <h2 className="text-info mt-4">GET IN TOUCH</h2>
                                        </div>
                                        <form className="example btn-group mt-4" action="action_page.php">
                                             <input type="text" placeholder=" Search.." name="search" />
                                             <button type="reset" className="btn btn-info btn-lg">Sing</button>
                                        </form>
                                        <h4 className=" text-info mt-4">Follow us</h4>
                                        <div className=" d-flex mt-4">
                                             <div className=" mr-1 sa">
                                                  <div className="followUs">
                                                       <a href="https://www.facebook.com/smsarzil.muntaha" target='_blank'>
                                                            <FontAwesomeIcon icon={faHome} />
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="sa mx-1">
                                                  <div className="followUs">
                                                       <a href="https://www.instagram.com/" target='_blank'>
                                                             <FontAwesomeIcon icon={faHome} />
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="sa mx-1">
                                                  <div className="followUs">
                                                       <a href="https://www.youtube.com/channel/UCJOmN86g6tWuxer1_J5wuaQ" target='_blank'>
                                                            <FontAwesomeIcon icon={faHome} />
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="sa mx-1">
                                                  <div className="followUs">
                                                       <a href="https://www.instagram.com/">
                                                            <FontAwesomeIcon icon={faHome} />
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>


               <div className="container mt-3">
                    <p className="text-left">
                         &copy; Sarzil Muntaha @ <span className="text-info">Azmira Akhtar</span>
                         <span className="text-info float-end">
                              Back to top
                         </span>
                    </p>
               </div>
          </div>
     );
};

export default Footer;