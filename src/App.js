import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/lost" component={Main}/>
                <Route path="/found" component={Main}/>
                <Route path="/vethelp" component={Main}/>
                <Route path="/favorites" component={Main}/>
                <Route path="/services" component={Main}/>
                <Route path="/hotels" component={Main}/>
                <Route path="/walking" component={Main}/>
                <Route path="/fostering" component={Main}/>
                <Route path="/home" component={Main}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
