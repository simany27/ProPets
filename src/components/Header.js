import React from 'react';
import {pictures} from '../source/variables';

const Header = () => {
    return (
        <div className={'jumbotron horizontal-block horizontal-block_header'}>
            <div className="container h-100">
                <div className="row no-gutters align-items-center h-100">
                    <div className="col-2">
                        <img className="logo" src={pictures[1]} alt={pictures[1].toString()}/>
                    </div>
                    <div className="col-2 ml-auto">
                        <a className="btn_active-brown btn btn-outline-light" href="#" role="button">Sign in</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;