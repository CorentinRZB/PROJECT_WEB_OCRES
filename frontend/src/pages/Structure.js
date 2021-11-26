import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Structure = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <ButtonsBottom left={'/planning'} right={'/sondages'} />
            </div>
        </main>
    );
};

export default Structure;