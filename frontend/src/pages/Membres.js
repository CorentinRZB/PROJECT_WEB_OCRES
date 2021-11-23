import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';
import Widget from '../components/Widget';


const Membres = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <Widget widgetNumber={1}/>
                <ButtonsBottom left={'/presentation'} right={'/planning'} />
            </div>
        </main>
    );
};

export default Membres;