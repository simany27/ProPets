import React, {useState} from 'react';
import {FaHome} from "react-icons/fa";
import {FaStar} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FaBullhorn} from "react-icons/fa";
import {FaPaw} from "react-icons/fa";
import {NavLink, Route, Switch} from "react-router-dom";
import Rectangle from "./Rectangle";


const Navigation = () => {

    return (
        <nav>
            <NavLink to="/home" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3 textNav'><FaHome size="20px" className='mr-3'/>Home</div>
            </NavLink>
            <NavLink to="/lost" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3 textNav'><FaSearch size="20px" className='mr-3'/>Lost</div>
            </NavLink>
            <NavLink to="/found" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3 textNav'><FaPaw size="20px" className='mr-3'/>Found</div>
            </NavLink>
            <NavLink to="/services" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3 textNav'><FaBullhorn size="20px" className='mr-3'/>Services</div>
            </NavLink>
            <NavLink to="/favorites" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3 textNav'><FaStar size="20px" className='mr-3'/>Favorites</div>
            </NavLink>

            <Switch>
                <Route path={'/home'}> <Rectangle pos={"position-home"}/></Route>
                <Route path={'/lost'}> <Rectangle pos={"position-lost"}/></Route>
                <Route path={'/found'}> <Rectangle pos={"position-found"}/></Route>
                <Route path={'/services'}> <Rectangle pos={"position-services"}/></Route>
                <Route path={'/favorites'}> <Rectangle pos={"position-favorites"}/></Route>
            </Switch>
        </nav>
    );
};

export default Navigation;