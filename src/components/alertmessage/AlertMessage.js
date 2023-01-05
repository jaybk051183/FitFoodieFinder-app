import React from "react";
import './AlertMessage.css'

function AlertMessage ({ alert }) {
    return (
        <div className="alert">
            <h3>{alert}</h3>
        </div>
    );
}

export default AlertMessage;