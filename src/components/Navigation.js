import React from 'react';
import {FaHome} from "react-icons/fa";
import {FaStar} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FaBullhorn} from "react-icons/fa";
import {FaPaw} from "react-icons/fa";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/home" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3 textNav'><FaHome size="20px" className='mr-3'/>Home</div>
                <div className='rectangle_white'/>
            </NavLink>
            <NavLink to="/lost" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3'><FaSearch size="20px" className='mr-3'/>Lost</div>
            </NavLink>
            <NavLink to="/found" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3'><FaPaw size="20px" className='mr-3'/>Found</div>
            </NavLink>
            <NavLink to="/services" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3'><FaBullhorn size="20px" className='mr-3'/>Services</div>
            </NavLink>
            <NavLink to="/favorites" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3'><FaStar size="20px" className='mr-3'/>Favorites</div>
            </NavLink>
        </nav>
    );
};

export default Navigation;