import React from 'react';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Login from '../components/Login';
import Register from '../components/Register';


const Membres = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <Login/>
                <Register/>
                <Scroll left={'/presentation'} right={'/map'} />
            </div>
        </main>
    );
};

export default Membres;