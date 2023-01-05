import React, {useEffect, useState} from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import RecipeCard from "../../components/recipecard/RecipeCard";
import AlertMessage from "../../components/alertmessage/AlertMessage";
import CommentBox from "../../components/commentbox/CommentBox";
import './Recipe.css';

function Recipe() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    const [healthLabels, setHealthLabels] = useState("vegan");

    const APP_ID = "b04454ec";
    const APP_KEY = "e03c1ff77a588dc048a805ab3d6f4239";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabels}`;

    useEffect(() => {
        getRecipeData()
    }, [])

    async function getRecipeData(){
        if (query !== "") {
            const result = await axios.get(url);
            if (!result.data.more) {
                return setAlert("Geen recept met opgegeven naam");
            }
            console.log(result);
            setRecipes(result.data.hits);
            setQuery("");
            setAlert("");
        } else {
            setAlert("Voer aub iets in");
        }
    }

    function onChange(e){
        setQuery(e.target.value)
    }
    function onFormSubmit(e){
        e.preventDefault();
        getRecipeData();
    }

    return (
        <div className="recipe-page-container">
            <h1>Recepten</h1>
            <form onSubmit={onFormSubmit} className="recipe-search-form">
                {alert !== "" && <AlertMessage alert={alert}/>}
                <input
                    type="text"
                    name="query"
                    onChange={onChange}
                    value={query}
                    autoComplete="off"
                    placeholder="Zoek recepten"
                /><input type="submit" value="Zoeken" />
                <select className="healthlabels">
                    <option onClick={()=>setHealthLabels("vegan")
                    }>Vegan</option>
                    <option onClick={()=>setHealthLabels("low-sugar")
                    }>Suikerarm</option>
                    <option onClick={()=>setHealthLabels("peanut-free")
                    }>Pindavrij</option>
                    <option onClick={()=>setHealthLabels("egg-free")
                    }>Eivrij</option>
                    <option onClick={()=>setHealthLabels("fish-free")
                    }>Visvrij</option>
                    <option onClick={()=>setHealthLabels("soy-free")
                    }>Sojavrij</option>
                    <option onClick={()=>setHealthLabels("shellfish-free")
                    }>Schaaldiervrij</option>
                    <option onClick={()=>setHealthLabels("tree-nut-free")
                    }>Boomnotenvrij</option>
                    <option onClick={()=>setHealthLabels("dairy-free")
                    }>Zuivelvrij</option>
                    <option onClick={()=>setHealthLabels("gluten-free")
                    }>Glutenvrij</option>
                    <option onClick={()=>setHealthLabels("paleo")
                    }>Paleo</option>
                    <option onClick={()=>setHealthLabels("vegetarian")
                    }>Vegetarisch</option>
                </select>
            </form>
            <div className="recipes">
                {recipes !== [] &&
                    recipes.map(recipe => <RecipeCard key={uuidv4()} recipe={recipe} />)}
            </div>
            <br/>
            <CommentBox />
        </div>
    );
}

export default Recipe;
