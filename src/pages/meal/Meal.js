import React, {useState, useEffect} from "react";
import MealList from "../../components/meallist/MealList";
import CommentBox from "../../components/commentbox/CommentBox";
import './Meal.css';
import axios from 'axios';
import CalorieCalculator from "../../components/caloriecalculator/CalorieCalculator";

function Meal() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    function handleChange(e) {
        setCalories(e.target.value);
        getMealData()
    }

    useEffect(() => {
        getMealData()
    }, [calories])

    async function getMealData(){
        try{
            const response = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=078f9200662d4e819dc26b9c312f6156&timeFrame=day&targetCalories=${calories}`);
            setMealData(response.data);
            console.log(response.data);
        }
        catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="meal-plan">
            <h1>Maaltijdplanner</h1>
            <CalorieCalculator />
            <br/>
            <h3>Stap2: Maaltijdenplanner - Zoek je maaltijden op basis van je ADH calorieën:</h3>
            <br/>
            <section className="calorie-input-section">
                <input
                    type="number"
                    placeholder="calorieën (bijv. 2000)"
                    value={calories}
                    onChange={handleChange}
                    className="meal-input"
                />
                <button onClick={getMealData} className="meal-button">Haal je dagelijkse maaltijplan</button>
            </section>
            {mealData && <MealList mealData={mealData} />}
            <br/>
            <CommentBox />
        </div>
    );
}

export default Meal;




































































