import React from 'react';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import "../style/pages/_presentation.scss";

const Presentation = () => {

    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo/>
                <div className="titre">
                    <h1 align="center"> Présentation du Bureau ECE Poker 2021-2022 </h1>
                </div>
                <div className="row">
                    <div className="column">
                        <img className="images" src="/assets/presentation/PP-CorentinR.png" alt="photo1"></img>
                        <h3 align="center">Corentin Rozenblum</h3>
                    </div>
                    <div className="column">
                        <img className="images" src="/assets/presentation/PP-ArnaudM.png" alt="photo2"></img>
                        <h3 align="center">Arnaud Meilhoc</h3>
                    </div>
                    <div className="column">
                        <img className="images" src="/assets/presentation/PP-MatthieuB.png" alt="photo3"></img>
                        <h3 align="center">Matthieu Brax</h3>
                    </div>
                    <div className="column">
                        <img className="images" src="/assets/presentation/PP-CamilleV.png" alt="photo4"></img>
                        <h3 align="center">Camille Vittiglio</h3>
                    </div>
                    <div className="column">
                        <img className="images" src="/assets/presentation/PP-AntoineC.png" alt="photo5"></img>
                        <h3 align="center">Antoine Cruveilher</h3>
                    </div>
                    <div className="column">
                        <img className="images" src="/assets/presentation/PP-AntoineG.png" alt="photo6"></img>
                        <h3 align="center">Antoine Gourlaouen</h3>
                    </div>
                    <div className="column">
                        <img className="images" src="/assets/presentation/PP-RichardL.png" alt="photo7"></img>
                        <h3 align="center">Richard Lhuissier</h3>
                    </div>
                    <div className="column">
                        <img className="images" src="/assets/presentation/PP-PaulP.png" alt="photo8"></img>
                        <h3 align="center">Paul Perrin</h3>
                    </div>
                </div>
                <Scroll left={'/'} right={'/membres'} />
            </div>
        </main>
    );
};

export default Presentation;