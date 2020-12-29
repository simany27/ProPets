import {AVATAR, EDITUSER, ENTER, LoginWrong, LOGOUT, PasswordWrong, UserExist} from "../actions/AccountingActions";

const initialState = {
    name: '',
    avatar: '',
    phone: '',
    email: '',
    token: '',
    roles: [],
    fblink:'',
    userExist: false,
    loginWrong: false,
    passwordWrong: false,
}

export default function accountingReducer (accounting = initialState, action) {
    switch (action.type) {
        case ENTER:
            return {...accounting,
                name: action.profile.name,
                avatar: action.profile.avatar,
                phone: action.profile.phone,
                email: action.profile.email,
                token: action.token,
                roles: action.profile.roles,
                userExist: false,
                loginWrong: false,
                passwordWrong: false
            };
        case LOGOUT:
            return {...accounting,
                name: '',
                avatar: '',
                phone: '',
                email: '',
                token: '',
                roles: [],
                userExist: false,
                loginWrong: false,
                passwordWrong: false
            };
        case AVATAR:
            return {...accounting,
                avatar: action.payload,
            };
        case EDITUSER:
            return {...accounting,
                name: action.payloadName,
                phone: action.payloadPhone,
                fblink: action.payloadLink
            };
        case UserExist:
            return{...accounting, userExist: true};
        case LoginWrong:
            return{...accounting, loginWrong: true, passwordWrong: false};
        case PasswordWrong:
            return{...accounting, loginWrong: false, passwordWrong: true};
        default:
            return accounting;
    }
}