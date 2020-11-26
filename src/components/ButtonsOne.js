import React from 'react';
import {FaPlus} from "react-icons/fa";
import {NavLink} from "react-router-dom";

const ButtonsOne = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 offset-9">
                    <NavLink to="/add"
                             className='nav-link btn btn-outline-light button-addNew'>
                        <div><FaPlus size="18px" fixedWidth className="paw-modal"/>
                            <span className="submit-modal">Add new</span></div>
                    </NavLink>
                </div>
            </div>
        </div>

    );
};

export default ButtonsOne;