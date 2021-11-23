import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';
import Widget from '../components/Widget';

export const Presentation = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo/>
                <Widget widgetNumber={0}/>
                <ButtonsBottom left={'/'} right={'/membres'} />
            </div>
        </main>
    )
}

export const Membres = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <Widget widgetNumber={1}/>
                <ButtonsBottom left={'/presentation'} right={'/planning'} />
            </div>
        </main>
    )
}

export const Planning = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <Widget widgetNumber={2}/>
                <ButtonsBottom left={'/membres'} right={'/structure'} />
            </div>
        </main>
    )
}

export const Structure = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <Widget widgetNumber={3}/>
                <ButtonsBottom left={'/planning'} right={'/sondages'} />
            </div>
        </main>
    )
}
export const Sondages = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <Widget widgetNumber={4}/>
                <ButtonsBottom left={'/structure'} right={'/contact'} />
            </div>
        </main>
    )
}

export default Presentation;