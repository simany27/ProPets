import React from 'react';
import {pictures} from "../source/variables";

const BodyRed = () => {
    return (
        <div className={'jumbotron horizontal-block horizontal-block__body-red'}>
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-lg-5">
                        <div className="h-1">
                            Coming soon
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-5">
                        <div className="planing">
                            We are planing to open a new service,<br/> where your cats and dogs can find their love!
                        </div>
                    </div>
                    <div className="heart col-xl-2">
                        <img src={pictures.heart} alt='heart' />
                            <div className="love">LOVE</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BodyRed;