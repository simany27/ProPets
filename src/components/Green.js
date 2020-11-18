import React from 'react';
import Navigation from "./Navigation";
import Center from "./Center";

const Green = () => {
    return (
        <div className="jumbotron green">
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <Navigation/>
                    </div>
                    <div className='col-8 horizontal-block__body-white lead'>
                        <Center/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Green;