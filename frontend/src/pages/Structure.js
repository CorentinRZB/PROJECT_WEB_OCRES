import React, {useEffect, useState} from 'react';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import '../style/pages/_structure.scss'


const Structure = () => {

    const [clicked, setClicked] = useState(false);
    
        useEffect(() => {
            if(clicked) {
        window.location.href = "https://poker-clock.herokuapp.com/";
            }
      });

    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <div className="button-container-struct">
                    <button className="button" onClick={() => setClicked(true)}> Créer sa propre Structure ! </button>
                </div>
                <Scroll left={'/planning'} right={'/sondages'} />
            </div>
        </main>
    );
};

export default Structure;