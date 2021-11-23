import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';
import Widget from '../components/Widget';

const Planning = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <Widget widgetNumber={2}/>
                <ButtonsBottom left={'/membres'} right={'/structure'} />
            </div>
        </main>
    );
};

export default Planning;