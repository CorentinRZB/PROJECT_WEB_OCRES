import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import PlanningComp from '../components/PlanningComp';


const Planning = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <PlanningComp/>
                <ButtonsBottom left={'/membres'} right={'/structure'} />
            </div>
        </main>
    );
};

export default Planning;