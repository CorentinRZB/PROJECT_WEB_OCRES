import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';
import Widget from '../components/Widget';

const Sondages = () => {
    return (
        <div className="widget">
                <Navigation />
                <Logo />
                <Widget widgetNumber={4}/>
                <ButtonsBottom left={'/structure'} right={'/contact'} />
            </div>
    );
};

export default Sondages;