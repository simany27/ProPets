import {connect} from "react-redux";
import ModalWindow from "../components/ModalWindow";
import {bindActionCreators} from "redux";
import {loginAction, registerAction} from "../actions/AccountingActions";

function mapStateToProps(state){
    return {
        accounting:{
            userExist: state.accounting.userExist,
            email: state.accounting.email,
            loginWrong: state.accounting.loginWrong,
            passwordWrong: state.accounting.passwordWrong
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        register: registerAction,
        login: loginAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
