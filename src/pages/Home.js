import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import BodyRed from "../components/BodyRed";
import BodyWhite from "../components/BodyWhite";
import BodyGreen from "../components/BodyGreen";
import BodyWhite2 from "../components/BodyWhite2";

export const Home = () => {

    return (
        <div>
            <Header/>
            <BodyWhite/>
            <BodyGreen/>
            <BodyWhite2/>
            <BodyRed/>
            <Footer/>
        </div>
    )
}

export default Home;