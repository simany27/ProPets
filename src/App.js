import React, {useEffect, useState} from 'react';
import './App.css';
import {Redirect, BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Main from "./pages/Main";
import {bindActionCreators} from "redux";
import {getUserInfo} from "./actions/AccountingActions";
import {connect} from "react-redux";

function App(props) {
    const[isToken, setIsToken] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        if(token){
            setIsToken(true);
            props.getUserInfo(email, token);
        }
    })

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/insta' component={() => {
                    window.location.href = 'https://www.instagram.com/?hl=en';
                    return null;
                }}/>
                <Route path='/facebook' component={() => {
                    window.location.href = 'https://www.facebook.com/';
                    return null;
                }}/>
                <Route path="/" exact> {isToken ? <Redirect to="/home"/> : <Home/>} </Route>
                <Route path="/lost" exact component={Main}/>
                <Route path="/found" exact component={Main}/>
                <Route path="/vethelp" exact component={Main}/>
                <Route path="/favorites" exact component={Main}/>
                <Route path="/services" exact component={Main}/>
                <Route path="/hotels" exact component={Main}/>
                <Route path="/walking" exact component={Main}/>
                <Route path="/fostering" exact component={Main}/>
                <Route path="/home" exact component={Main}/>
                <Route path="/add"img-find exact component={Main}/>}/>
                <Route path="/form" exact component={Main}/>}/>
                <Route path="/profile" exact component={Main}/>}/>
                <Route path="/start" exact component={Home}/>}/>
                <Route component={Main}/>
            </Switch>
        </BrowserRouter>
    );
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserInfo: getUserInfo
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(App);

