import React, {useState, useEffect} from 'react';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import '../style/pages/_structure.scss'
import { Icon } from '@iconify/react';
import structure from '../structure.json';



const Structure = () => {

    const [clicked, setClicked] = useState(false);
    const [clicked2, setClicked2] = useState(false);

    const [valeur1, setValeur1] = useState(structure[0].valeur);
    const [valeur2, setValeur2] = useState(structure[1].valeur);
    const [valeur3, setValeur3] = useState(structure[2].valeur);
    const [valeur4, setValeur4] = useState(structure[3].valeur);
    
        useEffect(() => {
            if(clicked) {
        window.location.href = "https://poker-clock.herokuapp.com/";
            }
            if(clicked2) {
                /* post dans structure.json*/
                structure[0].valeur=valeur1;
                structure[1].valeur=valeur2;
                structure[2].valeur=valeur3;
                structure[3].valeur=valeur4;
                
            }
      });


    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <div className="row">
                    <div className="column">
                    <Icon className="jeton" icon="mdi:poker-chip" color="blue" />
                        <h3 align="center">Valeur : </h3>
                        <input className="input" type="number" value={valeur1} onInput={e => setValeur1(e.target.value)}/>
                    </div>
                    <div className="column">
                    <Icon className="jeton" icon="mdi:poker-chip" color="green" />
                        <h3 align="center">Valeur : </h3>
                        <input className="input" type="number" value={valeur2} onInput={e => setValeur2(e.target.value)}/>
                    </div>
                    <div className="column">
                    <Icon className="jeton" icon="mdi:poker-chip" color="red" />
                    <h3 align="center">Valeur :</h3>
                    <input className="input" type="number" value={valeur3} onInput={e => setValeur3(e.target.value)}/>
                    </div>
                    <div className="column">
                    <Icon className="jeton" icon="mdi:poker-chip" color="black" />
                        <h3 align="center">Valeur : </h3>
                        <input className="input" type="number" value={valeur4} onInput={e => setValeur4(e.target.value)}/>
                    </div>
                </div>
                <div className="button-container-struct">
                    <button className="button" onClick={() => setClicked2(true)}> Sauvegarder les Valeurs </button>
                    <button className="button" onClick={() => setClicked(true)}> Créer ma propre Structure ! </button>
                </div>
                <Scroll left={'/map'} right={'/sondages'} />
            </div>
        </main>
    );
};

export default Structure;