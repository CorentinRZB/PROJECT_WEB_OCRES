import React from 'react';
import Navigation from '../components/Navigation';
import Réseaux from '../components/Réseaux';
import TexteAccueil from '../components/TexteAccueil';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';

const Accueil = () => {
    return (
    <div>
        <div className="home">
            <Navigation/>
            <Logo/> 
            <Réseaux/>
            <div className="home-main">
                <div className="main-content">
                    <h1> ECE POKER </h1>
                    <h2><TexteAccueil/></h2>
                </div>
            </div>
            <Scroll right={"/presentation"} />
        </div>
    </div>
    );
};

export default Accueil;