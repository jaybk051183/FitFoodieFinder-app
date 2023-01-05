import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <>
            <header className="homepage-header"><h1>Welkom</h1></header>
            <body>
            <div className="image-container">
                <section className="text-container-home">
                    <h3>🥦Wat voor recepten zijn er op basis van mijn dieetwensen? - Recepten</h3>
                    <p>Fit Foodie Finder biedt de mogelijkheid d.m.v. een keuze van je dieetwensen een aantal passende recepten uit te zoeken.</p>
                    <br/><br/>
                    <h3>🥗 Wil je graag grip op je calorieën? - Maaltijdplanner</h3>
                    <p>Met onze maaltijdplanner kun je d.m.v. een calculatie op basis van je geslacht, gewicht, leeftijd, hoogte en niveau van lichamelijke activiteiten bepalen hoeveel calorieën je per dag nodig zal hebben om af te vallen of juist bij te komen. Op basis hiervan kun je drie maaltijd adviezen ontvangen voor ontbijt, lunch en avondeten.</p>
                    <br/><br/>
                    <h3>🍌Hoeveel calorieën heb ik binnengekregen? - Calorietracker</h3>
                    <p>Met de calorietracker kun je op basis van je gewenste hoeveel calorieën per dag drie maaltijd adviezen ontvangen. Voer eenvoudig het aantal calorieën in!</p>
                    <br/><br/>
                    <p>Als je ingelogd bent, bekijk dan de <Link to="/profile"><span className="profile-link">Profielpagina</span></Link></p>
                    <p>Je kunt ook <Link to="/signin"><span className="signin-link-home">inloggen</span></Link> of jezelf <Link to="/signup"><span className="signup-link-home">registeren</span></Link> als je nog geen account hebt.</p>
                </section>
            </div>
            </body>
        </>
    );
}

export default Home;