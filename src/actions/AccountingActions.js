import {base_url, edit_endpoint, login_endpoint, register_endpoint} from "../source/variables"
import React from "react";

export const ENTER = 'ENTER';
export const UserExist = 'UserExist';
export const LoginWrong = 'LoginWrong';
export const PasswordWrong = 'PasswordWrong';
export const LOGOUT = 'LOGOUT';
export const AVATAR = 'AVATAR';
export const EDITUSER = 'EDITUSER';

export const enter = (profile, token) => ({
    type: ENTER,
    profile: profile,
    token: token
})

export const userExist = () => ({
    type: UserExist
})

export const loginWrong = () => ({
    type: LoginWrong
})

export const passwordWrong = () => ({
    type: PasswordWrong
})

export const logout = () => ({
    type: LOGOUT
})

export const changeAvatar = (url) => ({
    type: AVATAR,
    payload: url
})

export const editUser = (name, phone, fblink) => ({
    type: EDITUSER,
    payloadName: name,
    payloadPhone: phone,
    payloadLink: fblink,
})

export const changeAvatarAction = (formData) => {
    return dispatch => {
        fetch(`https://api.imgur.com/3/image`, {
            method: 'POST',
            headers: {
                'Authorization': 'Client-ID aa2ca7969108ea8'
            },
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => dispatch(editUserAction(data.data.link)))
            .catch(e => console.log(e.message));
    }
}

export const editUserAction = (url) => {
    return (dispatch, getState) => {
        const state = {...getState()};
        const user = {avatar: url, name: state.accounting.name, phone: state.accounting.phone};
        fetch(`${base_url}${edit_endpoint}${state.accounting.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': state.accounting.token
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(profile => {
                dispatch(changeAvatar(profile.avatar));
                console.log(profile)
            })
            .catch(e => console.log(e.message));
    }
}

export const editUserProfileAction = (name, email, phone, fblink) => {
    return (dispatch, getState) => {
        const state = {...getState()};
        const user = {avatar: state.accounting.avatar, name: name, phone: phone};
        fetch(`${base_url}${edit_endpoint}${state.accounting.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': state.accounting.token
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(profile => {
                dispatch(editUser(profile.name, profile.phone, fblink));
                console.log(profile)
            })
            .catch(e => console.log(e.message));
    }
}

export const loginAction = (email, password) => {
    let token = '';
    console.log('LoginAction is launched');
    return dispatch => {
        fetch(`${base_url}${login_endpoint}`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${btoa(email + ':' + password)}`
            }
        })
            .then(response => {
                 if (response.ok) {
                    token = response.headers.get('X-Token');
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(profile => {
                localStorage.setItem('token', token);
                localStorage.setItem('email', profile.email);
                dispatch(enter(profile, token));
                console.log(profile)
            })
            .catch(e => {
                if (e.message === '401') {
                    console.log('Login Wrong');
                    dispatch(loginWrong());
                    return;
                } else if (e.message === '403') {
                    console.log('Password wrong');
                    dispatch(passwordWrong());
                    return;
                } else {
                    console.log(e.message);
                }
            });
    }
}

export const registerAction = (user) => {
    let token = '';
    return dispatch => {
        fetch(`${base_url}${register_endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                 if (response.ok) {
                    token = response.headers.get('X-Token');
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(profile => {
                localStorage.setItem('token', token);
                localStorage.setItem('email', profile.email);
                dispatch(enter(profile, token));
                console.log(profile);

            })
            .catch(e => {
                if (e.message === '409') {
                    console.log('User exists');
                    dispatch(userExist());
                    return;
                } else {
                    console.log(e.message);
                }
            });
    }
}

export const getUserInfo = (email, token) => {
    console.log('GetUserInfo is launched');
    return dispatch => {
        fetch(`${base_url}/account/en/v1/${email}/info`, {
            method: 'GET',
            headers: {
                'X-Token': token
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(profile => {
                dispatch(enter(profile, token));
                console.log(profile)
            })
            .catch(e => console.log(e.message));
    }
}