import React, {useState} from 'react';
import {pictures} from '../source/variables';

const HorizontalBlockBodyWhite = (props) => {

    const activity = (choose) => {
        props.choosePurpose(choose);
        props.callModal();
    }

    return (
        <div className={'jumbotron horizontal-block__body-white'}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="h-1">
                            Welcome to your <span>pawfessional</span> community
                        </div>
                        <div className="row">
                            <div className="col-lg-10">
                                <div onClick={() => activity("/lost")} className="hyperlink_change-text_brown">
                                    <img className="img-find" src={pictures.find} alt='find'/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div onClick={() => activity("/found")} className="hyperlink_change-text_green">
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10">
                                <div>I’m okay, just want to <span className="hyperlink bold text-uppercase"
                                                               onClick={() => activity("/home")}>join</span> the pawsome
                                    community!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 ml-auto">
                        <img src={pictures.dog} alt='dog'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalBlockBodyWhite;