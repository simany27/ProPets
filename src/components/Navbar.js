import React from 'react'
import {NavLink} from 'react-router-dom'
import {pictures} from "../source/variables";
import {FaSearch} from "react-icons/fa";
import {FaPaw} from "react-icons/fa";
import {FaStethoscope} from "react-icons/fa";
import {FaHotel} from "react-icons/fa";
import {FaWalking} from "react-icons/fa";
import {FaDog} from "react-icons/fa";

export const Navbar = () => (
    <div className='container'>
        <div className='row'>
            <div className='col-5 offset-1'>
                <nav>
                    <ul className='menu'>
                        <li className='menu__item'>
                            <NavLink to="/lost" className='navbar-bottom'>
                                <div><FaSearch size="18px" className='mr-3'/>Lost</div>
                            </NavLink>
                        </li>
                        <li className='menu__item'>
                            <NavLink to="/found" className='navbar-bottom'>
                                <div><FaPaw size="18px" className='mr-3'/>Found</div>
                            </NavLink>
                        </li>
                        <li className='menu__item'>
                            <NavLink to="/vethelp" className='navbar-bottom'>
                                <div><FaStethoscope size="18px" className='mr-3'/>VetHelp</div>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='col-lg-5 offset-1'>
                <nav>
                    <ul className='menu'>
                        <li className='menu__item'>
                            <NavLink to="/hotels" className='navbar-bottom'>
                                <div><FaHotel size="18px" className='mr-3'/>Hotels</div>
                            </NavLink>
                        </li>
                        <li className='menu__item'>
                            <NavLink to="/walking" className='navbar-bottom'>
                                <div><FaWalking size="18px" className='mr-3'/>Walking</div>
                            </NavLink>
                        </li>
                        <li className='menu__item'>
                            <NavLink to="/fostering" className='navbar-bottom'>
                                <div><FaDog size="18px" className='mr-3'/>Fostering</div>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
)
