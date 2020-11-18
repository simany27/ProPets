import React from 'react';
import {pictures} from "../source/variables";

const HeaderMain = () => {
    return (
        <div className={'jumbotron header-main horizontal-block_header'}>
            <div className="container h-100">
                <div className="row no-gutters align-items-center h-100">
                    <div className="col-2">
                        <img className="logo" src={pictures[9]} alt={pictures[9].toString()}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;