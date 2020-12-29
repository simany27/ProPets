import React from 'react';

const Login = (props) => {

    return (
        <div>
            <div className="emptyBlock"></div>
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
                <div className="col-6 text-danger">{props.loginWrong ? "Login Wrong" : props.passwordWrong ? "Password Wrong" : ""}</div>
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
            </div>
            <div className="emptyBlock"></div>
            <div className="row">
                <div className="col-4 pass offset-2">
                    Forgot password?
                </div>
            </div>
        </div>
    );
};

export default Login;