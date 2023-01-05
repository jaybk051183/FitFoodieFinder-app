import React from 'react';
import './Footer.css'
import {FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa"

function Footer() {

    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                            <h3>FitFoodieFinder.nl</h3>
                            <ul className="list-unstyled">
                                <li>FitFoodieFinder.nl is een plek waar je je ziel en buik kunt vullen met lekkere en gezonde recepten.  </li>
                                <li>Onze service is nog erbij gratis!</li>
                                <li>Je dient je alleen nog te registreren en in te loggen.</li>
                            </ul>
                    </div>
                    <div className="col">
                        <h3>Contact:</h3>
                        <ul className="list-unstyled">
                            <li>Adres:</li>
                            <li>Willem Bontekoestraat 78</li>
                            <li>1335 NJ, Almere</li>
                            <li>Flevoland</li>
                            <li>Telefoon: 0031640103325</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Social media:</h3>
                        <ul className="list-unstyled">
                            <li><FaFacebookF/> Facebook</li>
                            <li><FaTwitter/> Twitter</li>
                            <li><FaInstagram/> Instagram</li>
                        </ul>
                    </div>

                </div>
                <br/>
                <hr />
                <div className="row">
                    <p className="col-terms">
                        &copy;{new Date().getFullYear()} NOVI University of Apllied Sciences | Alle rechten voorbehouden | Servicevoorwaarden | Privacy | Designed by Kailash
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
