import React, {useState, useEffect} from "react";
import "./AddItemForm.css";

function AddItemForm({ addItem }) {
    const [title, setTitle] = useState("");
    const [calorie, setCalorie] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        addItem({ title, calorie });
        setTitle("");
        setCalorie("");
    }

    useEffect(() => {
        localStorage.setItem("calorie", calorie);
    }, [calorie]);

    return (
        <form onSubmit={handleSubmit} className="add-item-form">
            <div className="input-container">
                <div>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Product naam"
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="number"
                        id="number"
                        required
                        value={calorie}
                        onChange={(e) => setCalorie(e.target.value)}
                        placeholder="Calorie hoeveelheid"
                    />
                </div>
            </div>
            <button type="submit" className="btn-cal-tracker">
                Voeg product toe
            </button>
            <br />
        </form>
    );
}

export default AddItemForm;

