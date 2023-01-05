import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import axios from "axios";
import './SignIn.css';

function SignIn() {
    const {register, handleSubmit} = useForm();
    const {loginFunction} = useContext(AuthContext);
    const [error, setError] = useState('');

    async function onFormSubmit(data) {
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                username: data.username,
                password: data.password,
            });
            loginFunction(response.data.accessToken)

        } catch (e) {
            console.error(e);
            if (e.response.status === 401) {
                setError('Inloggegevens kloppen niet, probeer opnieuw');
            }
        }
    }

    let errorMessage;
    if (error) {
        errorMessage = <p className="error-message-signin">{error}</p>;
    }

    return (
        <>
            <div className="signinpage-container">
                <h1>Welkom vrienden!</h1>
                <p>Laten we beginnen met het inloggen...</p>
                <form className="signin-form" onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="username">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="username"
                        placeholder="gebruikersnaam"
                        {...register("username", {required: true, minLength: 6})}
                    />
                    </label>
                    <label htmlFor="password">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password"
                        placeholder="wachtwoord"
                        {...register("password", {required: true, minLength: 6})}
                    />
                    </label>
                    <button
                        type="submit"
                        className="signin-form-button">
                        Inloggen
                    </button>
                    <br/>
                    {errorMessage}
                </form>
                <br/>
                <p>Heb je nog geen account? <Link to="/signup"><span className="signin-link">Registreer</span></Link> je dan eerst.</p>
                <p>Door in te loggen of registreren ga je akkoord met de algemene voorwaarden.</p>
            </div>
        </>
    );
}

export default SignIn;

























