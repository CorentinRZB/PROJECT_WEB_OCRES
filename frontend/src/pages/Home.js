import React from 'react';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetworks';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <SocialNetwork/>
            <div className="home-main">
                <div className="min-content">
                    <h1> ECE POKER </h1>
                    <h2></h2>
                </div>
            </div>
        </div>
    );
};

export default Home;