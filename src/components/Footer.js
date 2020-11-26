import React from 'react';
import {Navbar} from "./Navbar";
import {pictures} from '../source/variables';
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className={"jumbotron horizontal-block horizontal-block__footer"}>
            <div className="container h-100">
                <div className="row align-items-center h-120 py-4">
                    <div className="col-lg-3">
                        <img className="logo" src={pictures.miniLogo} alt='miniLogo'/>
                    </div>
                    <div className="col-lg-3 offset-1">
                        <NavLink to="/facebook" target="_blank">
                            <FaFacebook size="29px" fixedWidth className="toNetwork my-3"/>
                        </NavLink>
                        <NavLink to="/insta" target="_blank" color="white">
                            <FaInstagram size="29px" fixedWidth className="toNetwork my-3 mx-3"/>
                        </NavLink>
                        <div className="amphitheatre" style={{fontSize: '0.75rem'}}>
                            1600 Amphitheatre Pkwy <br/>Mountain View, CA 94043, USA
                        </div>
                    </div>
                    <div className="col-lg-4 offset-1">
                        <Navbar/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;