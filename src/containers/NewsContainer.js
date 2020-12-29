import {connect} from "react-redux";
import News from "../components/News";

function mapStateToProps(state) {
    return {
        accounting:{
            avatar: state.accounting.avatar,
            name: state.accounting.name
        },
        news:{
            newsUnits: state.news.newsUnits
        }
    }
}

export default connect(mapStateToProps)(News);


