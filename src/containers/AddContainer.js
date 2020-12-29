import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Add from "../components/Add";

function mapStateToProps(state) {
    return {
        accounting:{
            name: state.accounting.name,
            avatar: state.accounting.avatar,
        },
        news:{
            newsUnits: state.news.newsUnits
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        // changeAvatar: changeAvatarAction,
        // editUserProfile: editUserProfileAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);