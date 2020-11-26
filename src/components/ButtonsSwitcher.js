import React from 'react';
import {Switch, Route} from "react-router-dom";
import ButtonsTwo from "./ButtonsTwo";
import ButtonsOne from "./ButtonsOne";

const ButtonsSwitcher = () => {
    return (
        <Switch>
            <Route path={["/lost","/found"]} exact component={ButtonsTwo}/>
            <Route path={["/home","/services","/favorites"]} exact component={ButtonsOne}/>
        </Switch>
    );
};

export default ButtonsSwitcher;