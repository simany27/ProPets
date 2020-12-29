import React, {useEffect, useState} from 'react';
import {FaTimes} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaPaw} from "react-icons/fa";
import {pictures} from "../source/variables";
import Login from "./Login";
import Register from "./Register";
import {Redirect} from "react-router-dom";

const ModalWindow = (props) => {
    const [pageLogin, setPageLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleMouseSignUp = () => {
        setPageLogin(false); // registration
    }

    const handleMouseSignIn = () => {
        setPageLogin(true); // pageLogin
    }

    const handleClickRegister = () => {
        const user = {name, email, password};
        props.register(user);
    }

    const handleClickLogin = () => {
        props.login(email, password);
    }

    if(props.accounting.email){
        return <Redirect to={props.purpose}/>
    }
    return (
            <div className="container p-3">
                <div className="row">
                    <div className="col-11">
                        <img src={pictures.miniLogoGreen} alt="logo"/>
                    </div>
                    <div className="col-1">
                        <div onClick={props.closeModal}>
                            <FaTimes color="grey" className="w-100 mx-auto"/>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-7 text-green-modal pr-1"><strong>Welcome!</strong> Please sign in / sign up to
                        continue or
                    </div>
                    <div className="col-5 px-1">
                        <div className='facebook'><FaFacebook size="29px" fixedWidth className="facebook mr-3"/>
                            <span className="enterFB">Enter with Facebook</span></div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-6">
                        <div
                            onMouseEnter={handleMouseSignUp}
                            className='nav-link green-button d-flex align-items-center justify-content-center'
                            style={{backgroundColor: !pageLogin ? "rgba(0, 0, 0, .2)" : "#669885"}}>
                            <span className='text-white-modal'>Sign up</span></div>
                    </div>
                    <div className="col-6">
                        <div
                            onMouseEnter={handleMouseSignIn}
                            className='nav-link green-button-active d-flex align-items-center justify-content-center'
                            style={{backgroundColor: pageLogin ? "rgba(0, 0, 0, .2)" : "#669885"}}>
                            <span className='text-white-modal'>Sign in</span></div>
                    </div>
                </div>
                <div className="blockSign">
                    {pageLogin &&
                    <Login email={setEmail} password={setPassword} loginWrong={props.accounting.loginWrong}
                           passwordWrong={props.accounting.passwordWrong}/>
                    }

                    {!pageLogin &&
                    <Register name={setName} email={setEmail} password={setPassword} userExist={props.accounting.userExist}/>
                    }
                </div>

                <hr/>
                <div className="row">
                    <div className="col-6 pass">
                        By clicking “Submit”, you agree to us processing your information in accordance with <u>these
                        terms</u>.
                    </div>
                    <div className="col-2">
                        <div onClick={props.closeModal}
                             className='nav-link btn btn-outline-light white-button-modal d-flex align-items-center justify-content-center'>Cancel
                        </div>
                    </div>
                    <div className="col-4">
                        <nav onClick={() => !pageLogin ? handleClickRegister() : handleClickLogin()}
                             className='nav-link btn btn-outline-light green-button-modal'>
                            <div><FaPaw size="18px" fixedWidth className="paw-modal"/>
                                <span className="submit-modal">Submit</span></div>
                        </nav>
                    </div>
                </div>
            </div>
    );
};

export default ModalWindow;