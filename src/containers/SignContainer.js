import {connect} from "react-redux";
import ModalWindow from "../components/ModalWindow";
import {bindActionCreators} from "redux";
import {loginAction, registerAction} from "../actions/AccountingActions";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        register: registerAction,
        login: loginAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(ModalWindow);
