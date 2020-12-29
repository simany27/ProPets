import React from 'react';
import Navigation from "./Navigation";
import Center from "./Center";
import UserLogin from "./UserLogin";
import {useLocation} from "react-router-dom";
const pageHeight = document.documentElement.scrollHeight-74;

const Green = () => {

    let flag = useLocation().pathname;
    if(flag.charAt(flag.length-1)=='/'){
        flag = flag.slice(0, -1)
    }

    return (
        <div className="jumbotron green" style={{height: pageHeight}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <Navigation flag={flag}/>
                        <UserLogin flag={flag}/>
                    </div>
                    <div className='col-8 horizontal-block__body-white lead'  style={{height: pageHeight}}>
                        <Center/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Green;