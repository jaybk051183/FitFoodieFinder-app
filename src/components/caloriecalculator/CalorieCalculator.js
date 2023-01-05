import React from 'react';
import EntryForm from "../entryform/EntryForm";
import './CalorieCalculator.css'

function CalorieCalculator() {

        return (
            <div>
                <h3>Stap1: Calorie Calculator - Bereken je hoeveel calorieën. </h3>
                <p>Aanbevolen dagelijkse hoeveelheid (ADH) calorieën voor een man is ongeveer 2500 en voor een vrouw ongeveer 2000. </p>
                <p>Bereken met de calorie calculator specifieck uw aanbevolen dagelijkse hoeveelheid (ADH) calorieën: </p>
                <br/>
                <EntryForm />
            </div>
        );
}

export default CalorieCalculator;
