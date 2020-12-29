import React from 'react';
import {NavLink} from "react-router-dom";
import {FaHotel, FaWalking, FaDog, FaStethoscope} from "react-icons/fa";

const SubMenuServices = () => {
    return (
        <nav>
            <div className='divPos4'/>
            <NavLink to="/hotels" activeStyle={{color: "#FFE18B"}} className='navbar-left'>
                <div className='my-3 divPos4 mt-5'>
                    <div className="textPos">
                        <FaHotel size="20px" className='mr-3'/>Hotels
                    </div>
                </div>
            </NavLink>
            <NavLink to="/walking" activeStyle={{color: "#FFE18B"}} className='navbar-left'>
                <div className='my-3 divPos4'>
                    <div className="textPos">
                        <FaWalking size="20px" className='mr-3'/>Walking
                    </div>
                </div>
            </NavLink>
            <NavLink to="/fostering" activeStyle={{color: "#FFE18B"}} className='navbar-left'>
                <div className='my-3 divPos4'>
                    <div className="textPos">
                        <FaDog size="20px" className='mr-3'/>Fostering
                    </div>
                </div>
            </NavLink>
            <NavLink to="/vethelp" activeStyle={{color: "#FFE18B"}} className='navbar-left'>
                <div className='my-3 divPos4'>
                    <div className="textPos">
                        <FaStethoscope size="20px" className='mr-3'/>VetHelp
                    </div>
                </div>
            </NavLink>
        </nav>
    );
};

export default SubMenuServices;