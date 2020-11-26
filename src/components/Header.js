import React from 'react';
import {pictures} from '../source/variables';

const Header = (props) => {

    const activity = (choose) => {
        props.choosePurpose(choose);
        props.callModal();
    }

    return (
        <div className={'jumbotron horizontal-block horizontal-block_header'}>
            <div className="container h-100">
                <div className="row no-gutters align-items-center h-100">
                    <div className="col-2">
                        <img className="logo" src={pictures.bigLogo} alt='bigLogo'/>
                    </div>
                    <div className="col-2 ml-auto">
                        <button onClick={() => activity("/home")} className="btn_active-brown btn btn-outline-light">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;