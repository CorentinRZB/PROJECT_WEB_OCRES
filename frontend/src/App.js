import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import { Presentation, Membres, Planning, Structure, Sondages} from './pages/Widgets';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/presentation" component={Presentation}/>
      <Route exact path="/membres" component={Membres}/>
      <Route exact path="/planning" component={Planning}/>
      <Route exact path="/structure" component={Structure}/>
      <Route exact path="/sondages" component={Sondages}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
