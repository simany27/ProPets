import React from 'react';
import {Navbar} from "./Navbar";
import {pictures} from '../source/variables';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={"jumbotron horizontal-block horizontal-block__footer"}>
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-lg-3">
                        <img className="logo" src={pictures[1]} alt={pictures[1].toString()}/>
                    </div>
                    <div className="col-lg-3 offset-1">
                        <FaFacebook size="29px" fixedWidth className="my-3"/>
                        <FaInstagram size="29px" fixedWidth className="my-3 mx-3"/>
                        <div className="amphitheatre" style={{fontSize: '0.75rem'}}>
                            1600 Amphitheatre Pkwy <br/>Mountain View, CA 94043, USA
                        </div>
                    </div>
                    <div className="lg-2 offset-1">
                        <Navbar/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;