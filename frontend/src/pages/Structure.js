import React from 'react';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Structure = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <Scroll left={'/planning'} right={'/sondages'} />
            </div>
        </main>
    );
};

export default Structure;