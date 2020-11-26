import React from 'react';

const Register = (props) => {

    return (
        <div>
            <div className="form-group row">
                <div className="col-2 fieldName">
                    Name:
                </div>
                <div className="col-4">
                    <input
                        onChange={event => props.name(event.target.value)}
                        className="form-control input-modalWindow" type="text" placeholder={'Helen Johnson'}
                        required/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-2 fieldName">
                    Email:
                </div>
                <div className="col-4">
                    <input
                        onChange={event => props.email(event.target.value)}
                        className="form-control input-modalWindow" type="email"
                        placeholder={'helenjohnson@gmail.com'} required/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-2 fieldName">
                    Password:
                </div>
                <div className="col-4">
                    <input
                        onChange={event => props.password(event.target.value)}
                        className="form-control input-modalWindow" type="password"
                        placeholder={'****************'} required/>
                </div>
                <div className="col-6 pass">
                    Password must have at least 8 characters with at least one Capital letter, at least one lower
                    case letter and at least one number or special character.
                </div>
            </div>
            <div className="form-group row">
                <div className="col-2 fieldName">
                    Password:
                </div>
                <div className="col-4">
                    <input
                        onChange={event => props.passwordConfirm(event.target.value)}
                        className="form-control input-modalWindow" type="password"
                        placeholder={'****************'} itemType="password" required/>
                </div>
                <div className="col-6 pass">
                    Please re-enter your password
                </div>
            </div>
        </div>
    );
};

export default Register;