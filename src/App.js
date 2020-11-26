import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Main from "./pages/Main";
import Profile from "./components/Profile";

function App() {
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
                <Route path="/" exact component={Home}/>
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
            </Switch>
        </BrowserRouter>
    );
}

export default App;
