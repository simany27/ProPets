import React from 'react';
import {NavLink} from "react-router-dom";
import {pictures} from "../source/variables";

const Profile = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col text-green">
                        <span className='bold'> Your profile. </span>Change, edit and manage your data.
                    </div>
                </div>
                <fieldset className='fieldset-profile'>
                    <div className="row no-gutters">
                        <div className="col-6">
                            <NavLink to='/signup'
                                     className='nav-link green-button2 d-flex align-items-center justify-content-center text-white'>My
                                profile</NavLink>
                        </div>
                        <div className="col-6">
                            <NavLink to='/signin'
                                     className='nav-link green-button2 d-flex align-items-center justify-content-center text-white'>Activities</NavLink>
                        </div>
                    </div>
                    <div className="fieldset">
                        <div className="row">
                            <div className="col-1">
                                <img src={pictures.auto} alt=""/>
                            </div>
                            <div className="col-3 small text-green2 bold">
                                Anna Smith
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <div className='small'>Email:</div>
                            </div>
                            <div className="col-6">
                                <input className="form-control formInput" id="exampleFormControlTextarea1"
                                       placeholder={'helenjohnson@gmail.com'}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <div className='small'>Phone:</div>
                            </div>
                            <div className="col-6">
                                <input className="form-control formInput" id="exampleFormControlTextarea1"
                                       placeholder={'https://www.facebook.com/anna.smith908430'}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <div className='small'>FB link:</div>
                            </div>
                            <div className="col-6">
                                <input className="form-control formInput" id="exampleFormControlTextarea1"
                                       placeholder={'helenjohnson@gmail.com'}/>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="row">
                    <div className="col-2 offset-6">
                        <NavLink to='/signin'
                                 className='nav-link btn btn-outline-light white-button-modal d-flex align-items-center justify-content-center'>Cancel</NavLink>
                    </div>
                    <div className="col-3">
                        <NavLink to='/Submit'
                                 className='nav-link btn btn-outline-light green-button-modal d-flex align-items-center justify-content-center'><img
                            src={pictures.found} className='img-button' alt="paw"/>Save changes</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;