import React from 'react';
import {pictures} from "../source/variables";
import ButtonsSwitcher from "./ButtonsSwitcher";

const HeaderMain = () => {
    return (
        <div className={'jumbotron header-main horizontal-block_header shadow-sm mb-1'}>
            <div className="container h-100">
                <div className="row no-gutters align-items-center h-100">
                    <div className="col-2">
                        <img className="logo" src={pictures.miniLogoGreen} alt='logo'/>
                    </div>
                    <div className="col-10">
                        <ButtonsSwitcher/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;