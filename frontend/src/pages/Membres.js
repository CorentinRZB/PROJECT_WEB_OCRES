import React from 'react';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const Membres = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <Scroll left={'/presentation'} right={'/map'} />
            </div>
        </main>
    );
};

export default Membres;