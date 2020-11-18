import React from 'react';
import {pictures} from '../source/variables';

const HorizontalBlockBodyWhite = () => {
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
                                <div className="hyperlink_change-text_brown">
                                    {/*<a href="#">
                <span className="ml-auto mr-auto" onMouseOver="changeText(this,'Click to find!')"
                      onMouseOut="changeText(this,'I lost my pet!')">I lost my pet!
                </span>
                                    </a>*/}
                                    <img className="img-find" src={pictures[2]} alt={pictures[2].toString()}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="hyperlink_change-text_green">
                                    {/*<a className="hyperlink_change-text_green" href="#">
                <span onMouseOver="changeText(this,'What to do?')"
                      onMouseOut="changeText(this,'I found a pet!')">I found a pet!
                </span>
                                    </a>*/}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10">
                                <div>I’m okay, just want to <a className="hyperlink bold text-uppercase"
                                                               href="#">join</a> the pawsome
                                    community!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 ml-auto">
                        <img src={pictures[3]} alt={pictures[3].toString()}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalBlockBodyWhite;