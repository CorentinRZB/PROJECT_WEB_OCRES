import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';
import Widget from '../components/Widget';

const Presentation = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo/>
                <Widget widgetNumber={0}/>
                <ButtonsBottom left={'/'} right={'/membres'} />
            </div>
        </main>
    );
};

export default Presentation;