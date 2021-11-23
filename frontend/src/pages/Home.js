import React from 'react';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetworks';
import DynamicText from '../components/DynamicText';
import ButtonsBottom from '../components/ButtonsBottom';

const Home = () => {
    return (
    <div>
        <div className="home">
            <Navigation/>
            <SocialNetwork/>
            <div className="home-main">
                <div className="main-content">
                    <h1> ECE POKER </h1>
                    <h2><DynamicText/></h2>
                </div>
            </div>
            <ButtonsBottom right={"/presentation"} />
        </div>
    </div>
    );
};

export default Home;