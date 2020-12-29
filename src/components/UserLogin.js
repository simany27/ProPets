import React from 'react';
import {NavLink} from "react-router-dom";
import {FaSignOutAlt} from "react-icons/fa";
import {connect} from "react-redux";
import {pictures} from "../source/variables";
import {bindActionCreators} from "redux";
import {logout} from "../actions/AccountingActions";


const UserLogin = (props) => {

    return (
        <nav>
            <hr color="white"/>
            <div className='container'>

                <div className='row divPos2'>

                    <div className='col-3 my-3'>
                        <img src = {props.accounting.avatar === '5555555.jpg' ? pictures.auto : props.accounting.avatar}
                             className="mr-1 ml-n3 rounded-circle small textPos" alt="avatar"/>
                    </div>
                    <div className='col-9 my-3'>
                        <NavLink to="/profile" activeStyle={{color: "#84b6a3"}} className="navbar-left textPos mr-2">
                            {props.accounting.name}
                        </NavLink>
                    </div>
                    <div className={props.flag === '/profile' ? 'rectangle_white' : ''}/>
                </div>

            </div>
            <div className='my-3 mb-5'><FaSignOutAlt size="20px" className='mr-3'/>
                <NavLink to="/start"
                         onClick={() => {localStorage.clear(); props.logout()}}
                         activeStyle={{color: "#84b6a3"}} className="navbar-left">
                    Logout
                </NavLink>
            </div>
            <hr color="white"/>
        </nav>
    );
};

function mapStateToProps(state) {
    return {
        accounting:{
            name: state.accounting.name,
            avatar: state.accounting.avatar
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: logout
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);