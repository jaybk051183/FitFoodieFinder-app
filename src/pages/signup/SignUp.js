import React from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import './SignUp.css';

function SignUp() {
    const {register, handleSubmit,formState: { errors } } = useForm();
    const history = useHistory();

    async function onFormSubmit(data) {
        try {
            await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                username: data.username,
                email: data.email,
                password: data.password,
                role: ["user"]
            });
            history.push("/signin");

        } catch (e) {
            console.error(e);
            alert(e.response.data.message);
        }
    }

    return (
        <>
            <div className="signuppage-container">
                <h1>Registreren</h1>
                <p>Laten we beginnen met het registreren....</p>
                <form className="signup-form" onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="username">
                        Gebruikersnaam:
                        <input
                            type="text"
                            placeholder="gebruikersnaam"
                            id="username"
                            {...register("username", {
                                required: true,
                                minLength: {value: 6, message: "Minimum hoeveelheid tekens dient 6 te zijn"}
                            })}
                        />
                    </label>
                    {errors.username && <p className="error-message">{errors.username.message}</p>}
                    <label htmlFor="user-email">
                    Emailadres:
                    <input
                        type="email"
                        placeholder="user@email.com"
                        id="user-email"
                        {...register("email", {
                            required: true,
                            minLength: {value: 6, message: "Minimum hoeveelheid tekens dient 6 te zijn"},
                            validate: (value) => value.includes('@'),
                        })}
                    />
                    </label>
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                    <label htmlFor="password">
                    Wachtwoord:
                    <input
                        type="password"
                        placeholder="wachtwoord"
                        id="password"
                        {...register("password", {
                            required: true,
                            minLength: {value: 6, message: "Minimum hoeveelheid tekens dient 6 te zijn"}
                        })}
                    />
                    </label>
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                    <br/>
                    <button
                        type="submit"
                        className="signup-form-button">
                        Registreren
                    </button>
                </form>
                <br/>
                <p>Heb je al een account? Je kunt dan <Link to="/signin"><span className="signup-link">hier</span></Link> inloggen.</p>
            </div>
        </>
    );
}

export default SignUp;