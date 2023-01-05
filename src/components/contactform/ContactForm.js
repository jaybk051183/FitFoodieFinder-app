import React, { useState } from 'react';
import { FaHome, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './ContactForm.css';

function ContactForm () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit (e) {
        e.preventDefault();
        if (!email.includes('@')) {
            setEmailError('Voer a.u.b. een geldige emailadres');
            return;
        }
        const body = `
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `;
        window.location.href = `mailto:kailashbhaggoe@gmail.com?subject=Contact Form Submission&body=${body}`;
    }

    return (
        <>
            <div className="form-body">
                <div className="row">
                    <div className="form-address">
                        <div className="address-body">
                            <h3>Fit Foodie Finder adres:</h3>
                            <br/>
                            <p><FaHome/> Willem Bontekoestraat 78, 1335NJ, Almere</p>
                            <br/>
                            <p><FaPhone/> Bel of WhatsApp: 06-40103325</p>
                            <br/>
                            <p><FaFacebook/> Volg ons op Facebook</p>
                            <br/>
                            <p><FaTwitter/> Volg ons op Twitter</p>
                            <br/>
                            <p><FaInstagram/> Volg ons op Instagram</p>
                            <br/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="container">
                            <h1>Contactformulier</h1>
                            <p>Vul onderstaande formulier in voor het opnemen van contact....</p>
                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                            >
                                <label htmlFor="name">
                                    Naam:
                                    <input
                                        className="form-input"
                                        type="text"
                                        name="name"
                                        size="50"
                                        placeholder="Uw naam"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                                <label htmlFor="email">
                                    Email:
                                    <input
                                        className="form-input"
                                        type="email"
                                        name="email"
                                        size="50"
                                        placeholder="Uw email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {emailError && <div className="contact-form-error">{emailError}</div>}
                                </label>
                                <label htmlFor="contact-message">
                                    Bericht:
                                    <textarea
                                        className="form-input"
                                        name="comment"
                                        rows="4"
                                        cols="50"
                                        placeholder="Uw bericht"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </label>
                                <button className="contact-page-button" type="submit" value="Submit">
                                    Versturen
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
