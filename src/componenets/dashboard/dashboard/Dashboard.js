import React from 'react'
import { FaHome, FaShoppingCart, FaSearch, FaListUl } from "react-icons/fa";
import { CgLogIn, CgUserAdd } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { Helmets } from '../../../helmet/Helmets';
import '../dashboard/dashboard.css'
export const Dashboard = () => {
    return (
        <div className='bg-light '>
            <Helmets title={'Home'} name={""} content={"Welcome to shop"} />
            <nav className=" text-capitalize ">
                <div>
                    <div className='fixed-top pb-5 '>
                        <nav className="navbar-collapse bg-light  w-100 d-flex flex-row navbar-expand-lg" >
                            <ul className="navbar-nav   mb-lg-0">
                                <li>
                                    <Link className=' btn btn-light text-danger ' to={'/'}><h5>online market</h5></Link>
                                </li>
                            </ul>

                            <input className="form-control mr-sm-2 w-50" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit"><FaSearch /></button>
                            <div className="navbar-collapse d-flex justify-content-end">
                                <ul className="navbar-nav  mb-lg-0">
                                    <li className="nav-item me-2">
                                        <Link className="btn btn-light mx-2 ml-auto" to={'/login'}><h5><CgLogIn /><small>login</small>|<small>sign up</small></h5></Link>
                                        <Link className="btn btn-outline-warning ml-auto" to={'/cart'}><h5><FaShoppingCart /></h5></Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div className='mt-5'><nav className=" mt-5 pt-2 bg-secondary text-capitalize">
                        <div className='row'>
                            <div >
                                <ul className="navbar-nav mb-lg-0">
                                    <li>
                                        <select className="btn btn-secondary" name='option'>
                                            <option><small>Menu</small></option>
                                            <option>mobile</option>
                                            <option>fashion</option>
                                            <option>digikala</option>
                                            <option>computers</option>
                                            <option>shoes</option>
                                            <option>dress</option>
                                            <option>bests</option>
                                            <option>jewellry</option>
                                            <option>foods</option>
                                        </select>
                                        <Link className=' btn btn-secondary ' to={'/d'}><h6>gift cards</h6></Link>
                                        <Link className=' btn btn-secondary ' to={'/dw'}><h6>customer service</h6></Link>
                                        <Link className=' btn btn-secondary ' to={'/dq'}><h6>today's deals</h6></Link>
                                        <Link className=' btn btn-secondary ' to={'/dq'}><h6>super market</h6></Link>
                                        <Link className=' btn btn-secondary ' to={'/dqs'}><h6>do you have any question?</h6></Link>
                                        <Link className=' btn btn-secondary ' to={'/weather'}><h6>weather</h6></Link>

                                    </li>
                                </ul>
                            </div>
                        </div>

                    </nav></div>

                </div>
            </nav>
        </div>
    )
}
