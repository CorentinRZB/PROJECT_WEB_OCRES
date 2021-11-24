import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Widget from '../components/Widget';

const Structure = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <Widget widgetNumber={3}/>
                <ButtonsBottom left={'/planning'} right={'/sondages'} />
            </div>
        </main>
    );
};

export default Structure;