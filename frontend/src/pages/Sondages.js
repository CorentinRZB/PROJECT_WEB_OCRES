import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Sondages = () => {
    return (
        <div className="widget">
                <Navigation />
                <Logo />
                <ButtonsBottom left={'/structure'} right={'/contact'} />
            </div>
    );
};

export default Sondages;