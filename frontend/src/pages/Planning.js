import React from 'react';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Planning = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <Scroll left={'/membres'} right={'/structure'} />
            </div>
        </main>
    );
};

export default Planning;