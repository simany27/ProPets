import React from 'react';
import Hotels from "./Hotels";
import {Redirect, Route, Switch} from "react-router-dom";
import Walking from "./Walking";
import Fostering from "./Fostering";
import Vethelp from "./Vethelp";

const Services = () => {
    return (
        <Switch>
            <Route path='/services' exact> <Redirect to="/hotels"/> </Route>
            <Route path={'/hotels'} exact component={Hotels}/>
            <Route path={'/walking'} exact component={Walking}/>
            <Route path={'/fostering'} exact component={Fostering}/>
            <Route path={'/vethelp'} exact component={Vethelp}/>
            <Route component={Hotels}/>
        </Switch>
    );
};

export default Services;