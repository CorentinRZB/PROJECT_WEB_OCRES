import React from 'react';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Sondages = () => {
    return (
        <div className="widget">
                <Navigation />
                <Logo />
                <Scroll left={'/structure'} right={'/contact'} />
            </div>
    );
};

export default Sondages;