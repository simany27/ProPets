import React, {useEffect, useState} from 'react';
import {FaHome} from "react-icons/fa";
import {FaStar} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FaBullhorn} from "react-icons/fa";
import {FaPaw} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import SubMenuServices from "./SubMenuServices";


const Navigation = (props) => {

    const [subMenu, setSubMenu] = useState(false);

    useEffect(() => {
        if (props.flag === '/hotels' || props.flag === '/walking' || props.flag === '/fostering'
            || props.flag === '/vethelp') {
            setSubMenu(true);
        } else {
            setSubMenu(false);
        }
    }, [props.flag]);

    return (
        <nav>
            <NavLink to="/home" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3 divPos'>
                    <div className="textPos">
                        <FaHome size="20px" className='mr-3'/>Home
                    </div>
                    <div className={props.flag === '/home' ? 'rectangle_white' : ''}/>
                </div>
            </NavLink>
            <NavLink to="/lost" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3 divPos'>
                    <div className="textPos">
                        <FaSearch size="20px" className='mr-3'/>Lost
                    </div>
                    <div className={props.flag === '/lost' ? 'rectangle_white' : ''}/>
                </div>
            </NavLink>
            <NavLink to="/found" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3 divPos'>
                    <div className="textPos">
                        <FaPaw size="20px" className='mr-3'/>Found
                    </div>
                    <div className={props.flag === '/found' ? 'rectangle_white' : ''}/>
                </div>
            </NavLink>

            {!subMenu &&
            <NavLink to="/services" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3 divPos'>
                    <div className="textPos">
                        <FaBullhorn size="20px" className='mr-3'/>Services
                    </div>
                </div>
            </NavLink>
            }

            {subMenu &&
            <NavLink to="/services" className='navbar-left services'>
                <div className='my-3 divPos'>
                    <div className="textPos">
                        <FaBullhorn size="20px" className='mr-3'/>Services
                    </div>
                    <div className='rectangle_white'/>
                </div>
                <div className='divPos3'><SubMenuServices flag={props.flag}/></div>
            </NavLink>
            }


            <NavLink to="/favorites" activeStyle={{color: "#84b6a3"}} className='navbar-left'>
                <div className='my-3 divPos'>
                    <div className="textPos">
                        <FaStar size="20px" className='mr-3'/>Favorites
                    </div>
                    <div className={props.flag === '/favorites' ? 'rectangle_white' : ''}/>
                </div>
            </NavLink>
        </nav>
    );
};

export default Navigation;