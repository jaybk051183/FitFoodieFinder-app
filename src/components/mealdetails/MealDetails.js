import React, { useState, useEffect } from "react";
import axios from 'axios';
import './MealDetails.css';

function MealDetails({ meal }) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(()=>{
        async function fetchData() {
            try{
                const { data } = await axios.get(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=078f9200662d4e819dc26b9c312f6156&includeNutrition=false`);
                setImageUrl(data.image);
            }
            catch (e) {
                console.error(e)
            }
        }
        fetchData();
    },[meal.id])

    return (
        <article>
            <h3>{meal.title}</h3>
            <img src={imageUrl} alt="recipe" />
            <ul className="instructions">
                <li>Voorbereidingstijd: {meal.readyInMinutes} minuten</li>
                <li>Aantal porties: {meal.servings}</li>
            </ul>
            <a href={meal.sourceUrl} target="_blank" className="recipe-site">Ga naar recept</a>
        </article>
    );
}

export default MealDetails;
