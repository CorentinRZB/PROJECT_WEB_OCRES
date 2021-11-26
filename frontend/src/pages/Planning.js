import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Planning = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <ButtonsBottom left={'/membres'} right={'/structure'} />
            </div>
        </main>
    );
};

export default Planning;