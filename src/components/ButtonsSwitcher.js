import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import ButtonsTwo from "./ButtonsTwo";
import ButtonsOne from "./ButtonsOne";
import Home from "../pages/Home";

const ButtonsSwitcher = () => {
    return (
        <Switch>
            <Route path={["/lost","/found"]} exact component={ButtonsTwo}/>
            <Route path={["/home","/services","/favorites", "/hotels", "/walking", "/fostering", "/vethelp"]} exact component={ButtonsOne}/>
        </Switch>
    );
};

export default ButtonsSwitcher;