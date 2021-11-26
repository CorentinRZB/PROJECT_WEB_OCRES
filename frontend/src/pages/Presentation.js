import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Presentation = () => {

    let left = Math.floor(Math.random() * 200 + 700) + "px";
    let top = Math.floor(Math.random() * 200 + 150) + "px";
    let transform = "scale(" + (Math.random() + 0.7) + ")";


    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo/>
                <div className="img-content">
                    <div className="img-container hover">
                        <img className="img-content" src="/assets/presentation/PP-CorentinR.png" alt="photo1" width="283" height="340"></img>
                        <img className="img-content" src="/assets/presentation/PP-ArnaudM.png" alt="photo2" width="283" height="340"></img>
                        <img className="img-content" src="/assets/presentation/PP-MatthieuB.png" alt="photo3" width="283" height="340"></img>
                        <img className="img-content" src="/assets/presentation/PP-AntoineG.png" alt="photo4" width="283" height="340"></img>
                        <img className="img-content" src="/assets/presentation/PP-CamilleV.png" alt="photo5" width="283" height="340"></img>
                        <img className="img-content" src="/assets/presentation/PP-AntoineC.png" alt="photo6" width="283" height="340"></img>
                        <img className="img-content" src="/assets/presentation/PP-RichardL.png" alt="photo7" width="283" height="340"></img>
                        <img className="img-content" src="/assets/presentation/PP-PaulP.png" alt="photo8" width="283" height="340"></img>
                     </div>
                     <span className="random-circle" style={{left, top, transform}}></span>
                 </div>
                <ButtonsBottom left={'/'} right={'/membres'} />
            </div>
        </main>
    );
};

export default Presentation;