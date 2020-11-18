import React from 'react'
import {NavLink} from 'react-router-dom'
import {pictures} from "../source/variables";

export const Navbar = () => (
    <>
        <nav className="navbar navbar-dark navbar-expand-lg">
            <ul className="navbar-nav">
                {/*{ this.state.isLoggedIn ? <Route path="/about" components={About}/> : null }*/}
                {/*<li className="nav-item">
                this.state.isLoggedIn ? <NavLink exact to="/" className="nav-link">Home</NavLink> : null
            </li>*/}
                {/*<li className="nav-item">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>*/}
                <li className="nav-item">
                    <NavLink to="/hotels" className="nav-link">Services</NavLink>
                    {/*<img src={services} alt={services}/>*/}
                </li>
                {/*<li className="nav-item">
                <NavLink to="/favorites" className="nav-link">Favorites</NavLink>
                <img src={favorites} alt={favorites}/>
                <i className="fas fa-star"></i>
            </li>*/}
                <li className="nav-item d-flex">
                    <img src={pictures[6]} alt={pictures[6]}/>
                    <NavLink to="/lost" className="nav-link">Lost</NavLink>
                </li>
                <li className="nav-item d-flex">
                    <img src={pictures[7]} alt={pictures[7].toString()}/>
                    <NavLink to="/found" className="nav-link">Found</NavLink>
                </li>
                <li className="nav-item d-flex">
                    <img src={pictures[8]} alt={pictures[8].toString()}/>
                    <NavLink to="/vethelp" className="nav-link">VetHelp</NavLink>
                </li>
                {/*<li className="nav-item">
                <NavLink to="/hotels" className="nav-link"><img src={hotels} alt={hotels}/>Hotels</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/walking" className="nav-link"><img src={walking} alt={walking}/>Walking</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/fostering" className="nav-link"><img src={fostering} alt={fostering}/>Fostering</NavLink>
            </li>*/}
            </ul>
        </nav>
    </>
)
