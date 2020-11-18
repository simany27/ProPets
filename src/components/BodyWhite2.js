import React from 'react';
import {pictures} from '../source/variables'

const BodyWhite2 = () => {
    return (
        <div className={"horizontal-block horizontal-block__body-white"}>
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-lg-5">
                        <img src={pictures[4]} alt={pictures[4].toString()} />
                    </div>
                    <div className="col-lg-7">
                        <div className="title">Here is collected everything that your pet needs:</div>
                        <div>
                            <ul>
                                <li>professional veterinarian tips;</li>
                                <li>useful information about education and care;</li>
                                <li>fostering home search;</li>
                                <li>information about pet-sitting and walking service;</li>
                                <li>and of course, great communication with new friends in your social network!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyWhite2;