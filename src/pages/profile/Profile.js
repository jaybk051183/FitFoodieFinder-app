import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import './Profile.css';

function Profile() {
    const { auth } = useContext(AuthContext);

    return (
        <>
            <header className="profilepage-header"><h1>Profielpagina</h1></header>
            <section className="profile-body">
                <h2>Gegevens gebruiker🪪</h2>
                <br/>
                <table className="content-table">
                    <thead>
                    <tr>
                        <th>Gebruikersnaam:</th>
                        <th>Status:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{auth.username}</td>
                        <td>{auth.isAuth ? "Gebruiker is geautoriseerd" : "Gebruiker is niet geautoriseerd"}🔓</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default Profile;

