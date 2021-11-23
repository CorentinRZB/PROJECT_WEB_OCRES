import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <div className="navigation">
            <ul>
                <NavLink to ="/" exact className="hover" activeClassName="nav-active">
                    <li>Accueil</li>
                </NavLink>

                <li className="nav-menu">Menu
                <ul className="nav-widgets">
                    <NavLink to="/presentation" activeClassName="nav-active"
                    className="hover">
                        <li>Présentation</li>
                    </NavLink>
                    <NavLink to="/membres" activeClassName="nav-active"
                    className="hover">
                        <li>Membres</li>
                    </NavLink>
                    <NavLink to="/planning" activeClassName="nav-active"
                    className="hover">
                        <li>Planning</li>
                    </NavLink>
                    <NavLink to="/structure" activeClassName="nav-active"
                    className="hover">
                        <li>Structure</li>
                    </NavLink>
                    <NavLink to="/sondages" activeClassName="nav-active"
                    className="hover">
                        <li>Sondages</li>
                    </NavLink>
                </ul>
                </li>

                <NavLink to="/contact" exact className="hover"
                activeClassName="nav-active">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;