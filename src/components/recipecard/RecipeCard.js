import React, { useState } from "react";
import RecipeDetails from '../recipedetails/RecipeDetails';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
    const [show, setShow] = useState(false);
    const { label, image, url, ingredients } = recipe.recipe;

    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target="_blank" rel="refer">
                website
            </a><br/>
            <button onClick={() => setShow(!show)}>INGREDIËNTEN</button>
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    );
};

export default RecipeCard;