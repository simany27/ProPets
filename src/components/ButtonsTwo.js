import React from 'react';
import {NavLink} from "react-router-dom";
import {FaPaw} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";

const ButtonsTwo = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 offset-6">
                    <NavLink to="/form"
                             className='nav-link btn btn-outline-light button-ILost'>
                        <div><FaSearch size="18px" fixedWidth className="paw-modal"/>
                            <span className="submit-modal">I lost my pet</span></div>
                    </NavLink>
                </div>
                <div className="col-3">
                    <NavLink to="/form"
                             className='nav-link btn btn-outline-light button-addNew'>
                        <div><FaPaw size="18px" fixedWidth className="paw-modal"/>
                            <span className="submit-modal">I found a pet</span></div>
                    </NavLink>
                </div>
            </div>
        </div>

    );
};

export default ButtonsTwo;