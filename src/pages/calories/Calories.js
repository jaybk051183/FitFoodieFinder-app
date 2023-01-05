import React from 'react';
import CalorieTracker from "../../components/calorietracker/CalorieTracker";
import './Calories.css';

function Calories() {
    return (
        <div className="cal-page-container">
            <h1>Calorieën Tracker</h1>
            <CalorieTracker />
        </div>
    );
}

export default Calories;