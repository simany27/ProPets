export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';

export const registerAction = (name, email, password, passwordConfirm) => ({
    type: REGISTER,
    payload: 'Register'
})

export const loginAction = (email, password) => ({
    type: LOGIN,
    payload: 'Login'
})