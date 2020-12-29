import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeAvatarAction, editUserProfileAction} from "../actions/AccountingActions";
import Profile from "../components/Profile";

function mapStateToProps(state) {
    return {
        accounting:{
            name: state.accounting.name,
            phone: state.accounting.phone,
            avatar: state.accounting.avatar,
            email: state.accounting.email,
            token: state.accounting.token,
            fblink: state.accounting.fblink
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeAvatar: changeAvatarAction,
        editUserProfile: editUserProfileAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
