import React, {useContext} from 'react';
import logo2 from '../../assets/logo2.png';
import { NavLink } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import './NavBar.css';

function NavBar() {
    const { auth, logoutFunction } = useContext(AuthContext);

    return (
        <nav>
            <span className="logo-container">
                <img src={logo2} alt="logo"/>
                <h3 className="logo-text">Fit Foodie Finder</h3>
            </span>
            <ul className="list-nav-elements">
                <li> <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                </li>
                <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
                <li><NavLink to="/faq" activeClassName="active-link">FAQ</NavLink></li>
                {auth.isAuth === true ?
                    <>
                        <li><NavLink to="/profile" activeClassName="active-link">Profiel</NavLink></li>
                        <li><NavLink to="/recepten" activeClassName="active-link">Recepten</NavLink></li>
                        <li><NavLink to="/maaltijden" activeClassName="active-link">Maaltijden</NavLink></li>
                        <li><NavLink to="/calorieën" activeClassName="active-link">Calorieën</NavLink></li>
                        <li><button className="logout-button" type="button" onClick={logoutFunction}>Log uit</button></li>
                        <div className="logged-in-user-status">
                            <text className="logged-in-user">Ingelogd als:</text>
                            <text>{auth.isAuth && auth.username}</text>
                        </div>
                    </>
                    :
                    <>
                    <li><NavLink to="/signin" activeClassName="active-link">Log in</NavLink></li>
                    <li><NavLink to="/signup" activeClassName="active-link">Registreren</NavLink></li>
                    </>
                }
            </ul>
        </nav>
    );
}

export default NavBar;




















