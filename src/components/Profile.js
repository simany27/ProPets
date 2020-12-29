import React, {useState} from 'react';
import {pictures} from "../source/variables";
import {FaCamera} from "react-icons/fa";
import {FaPencilAlt} from "react-icons/fa";
import {FaSave} from "react-icons/fa";
import {useHistory} from "react-router-dom";

const Profile = (props) => {
    const [isProfile, setIsProfile] = useState(true);
    const [isEditName, setEditName] = useState(false);
    let history = useHistory();
    const [name, setName] = useState(props.accounting.name);
    const [email, setEmail] = useState(props.accounting.email);
    const [phone, setPhone] = useState(props.accounting.phone);
    const [fblink, setFblink] = useState(props.accounting.fblink);

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
                            <div
                                onClick={() => {
                                    setIsProfile(true)
                                }}
                                className='nav-link green-button2 d-flex align-items-center justify-content-center text-white'
                                style={{backgroundColor: !isProfile ? "rgba(0, 0, 0, .2)" : "#669885"}}>My
                                profile
                            </div>
                        </div>
                        <div className="col-6">
                            <div
                                onClick={() => {
                                    setIsProfile(false)
                                }}
                                className='nav-link green-button2 d-flex align-items-center justify-content-center text-white'
                                style={{backgroundColor: isProfile ? "rgba(0, 0, 0, .2)" : "#669885"}}>Activities
                            </div>
                        </div>
                    </div>
                    <div className="fieldset">

                        <div className="row d-flex align-items-center">
                            <div className="col-1 mb-3 mr-3 text-green profilePhoto">
                                <img src = {props.accounting.avatar === '5555555.jpg' ? pictures.auto : props.accounting.avatar} alt="avatar"
                                     className="avatar"/>
                                <FaCamera size="10px" className='cameraIcon'/>
                                <div className="file-inputs">
                                    <input type="file" className="file"
                                           onChange={event => {
                                               const file = event.target.files[0];
                                               let formData = new FormData();
                                               formData.append('image', file);
                                               props.changeAvatar(formData);
                                           }}
                                    />
                                </div>
                            </div>

                            <div className="col-5 small text-green bold">
                                {!isEditName? props.accounting.name :
                                    <input
                                        onChange = {(event) => setName(event.target.value)}
                                        className="form-control input-Profile" type="text"
                                        placeholder={props.accounting.name}/>}
                                <FaPencilAlt size="12px" className='ml-3 cursor' style={{color: "darkgray"}}
                                             onClick={() => setEditName(true)}/>
                            </div>

                        </div>
                        <div className="form-group row">
                            <div className="col-2 fieldName">
                                Email:
                            </div>
                            <div className="col-6">
                                <input
                                    onChange = {(event) => setEmail(event.target.value)}
                                    className="form-control input-Profile" type="email"
                                    placeholder={props.accounting.email}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-2 fieldName">
                                Phone:
                            </div>
                            <div className="col-6">
                                <input
                                    onChange = {(event) => setPhone(event.target.value)}
                                    className="form-control input-Profile" type="number"
                                    placeholder={props.accounting.phone}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-2 fieldName">
                                FB link:
                            </div>
                            <div className="col-6">
                                <input
                                    onChange = {(event) => setFblink(event.target.value)}
                                    className="form-control input-Profile" type="text"
                                       placeholder={props.accounting.fblink}/>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="row">
                    <div className="col-2 offset-6">
                        <button
                            onClick={() => {
                                console.log('Cancel');
                                history.push("/home");
                            }}
                            className='nav-link btn btn-outline-light white-button-modal d-flex align-items-center justify-content-center'>Cancel
                        </button>
                    </div>
                    <div className="col-4">
                        <button
                            onClick={() => {
                                props.editUserProfile(name, email, phone, fblink);
                                console.log('Save changes');
                            }}
                            className='btn btn-outline-light green-button-modal d-flex align-items-center justify-content-center px-3'>
                            <FaSave size="20px" className='mr-3'/>Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;