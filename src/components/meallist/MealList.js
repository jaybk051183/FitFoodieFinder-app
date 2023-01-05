import React from "react";
import Mealdetails from "../../components/mealdetails/MealDetails";
import './MealList.css'

function MealList({ mealData }) {
    const nutrients = mealData.nutrients;
    return (
        <div className="daily-meal-plan">
            <section className="nutrients">
                <p>Mijn dagelijkse voedingswaarden per drie maaltijden (ontbijt, lunch & dinner):</p>
                <br/>
                <ul>
                    <li>Calorieën: {nutrients.calories.toFixed(0)}</li>
                    <li>Koolhydraten: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Vetten: {nutrients.fat.toFixed(0)}</li>
                    <li>Eiwitten: {nutrients.protein.toFixed(0)}</li>
                </ul>
                <br/>
            </section>
            <section className="meals">
                {mealData.meals.map((meal) => {
                    return <Mealdetails key={meal.id} meal={meal} />;
                })}
            </section>
        </div>
    );
}

export default MealList;
