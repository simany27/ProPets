import React from 'react';
import {Switch, Route} from "react-router-dom";
import News from "./News";
import Services from "./Services";
import Lost from "./Lost";
import Found from "./Found";
import Favorites from "./Favorites";
import Add from "./Add";
import Form from "./Form";
import Profile from "./Profile";

const Center = (props) => {
    return (
        <Switch>
            <Route path={'/home'} exact component={News}/>
            <Route path={'/lost'} exact component={Lost}/>}/>
            <Route path={'/found'} exact component={Found}/>}/>
            <Route path={'/services'} exact component={Services}/>}/>
            <Route path={'/favorites'} exact component={Favorites}/>}/>
            <Route path={'/add'} exact component={Add}/>}/>
            <Route path={'/form'} exact component={Form}/>}/>
            <Route path={'/profile'} exact component={Profile}/>}/>
        </Switch>
    );
};

export default Center;