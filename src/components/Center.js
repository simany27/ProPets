import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import News from "../containers/NewsContainer";
import Services from "./Services";
import Lost from "./Lost";
import Found from "./Found";
import Favorites from "./Favorites";
import Add from "../containers/AddContainer";
import Form from "./Form";
import Profile from "../containers/ProfileContainer";

const Center = () => {
    return (
        <Switch>
            <Route path={'/home'} exact component={News}/>
            <Route path={'/lost'} exact component={Lost}/>}/>
            <Route path={'/found'} exact component={Found}/>}/>
            <Route path={['/services','/hotels']} exact component={Services}/>
            <Route path={'/walking'} exact component={Services}/>
            <Route path={'/fostering'} exact component={Services}/>
            <Route path={'/vethelp'} exact component={Services}/>
            <Route path={'/favorites'} exact component={Favorites}/>}/>
            <Route path={'/add'} exact component={Add}/>}/>
            <Route path={'/form'} exact component={Form}/>}/>
            <Route path={'/profile'} exact component={Profile}/>}/>
            <Route component={News}/>
        </Switch>
    );
};

export default Center;