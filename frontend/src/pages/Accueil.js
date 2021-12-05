import React from "react";
import Navigation from '../components/Navigation';
import Réseaux from '../components/Réseaux';
import TexteAccueil from '../components/TexteAccueil';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';
import Décompte from '../components/Décompte';

class Accueil extends React.Component {

    constructor(props){
        super(props);
        this.state={reponse:""};
    }
        
    callAPI(){
      fetch("http://localhost:3000/date")
        .then(res => res.json())
        .then( res => {
             this.setState({reponse: res});  
       });
}

componentDidMount() {
    this.callAPI();
}

    render() {
        if(this.state.reponse) {
            console.log('event : ' + this.state.reponse.date);
        
    return (
    <div>
        <div className="home">
            <Navigation/>
            <Logo/> 
            <Réseaux/>
            <div className="home-main">
                <div className="main-content">
                    <h1> ECE POKER </h1>
                    <h2><TexteAccueil/></h2>
                </div>
            </div>
            <Décompte date={this.state.reponse.date}/>
            <Scroll right={"/presentation"} />
        </div>
    </div>
    );
    }
    return null;
}
}

export default Accueil;