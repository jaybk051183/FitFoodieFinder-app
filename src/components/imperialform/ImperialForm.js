import React, {useState} from 'react';
import './ImperialForm.css';

function ImperialForm (props) {
    const { weightChange, ageChange, heightChange } = props;
    const [feet, setFeet] = useState(0);
    const [inches, setInches] = useState(0);

    function handleWeightChange (e) {
        const weight = e.target.value;
        weightChange(weight * 0.453592);
    }

    function handleAgeChange (e) {
        const age = e.target.value;
        ageChange(age);
    }

    function handleFeetChange (e) {
        let newFeet = e.target.value;
        if (newFeet.length === 0) {
            newFeet = 0;
        }
        setFeet(newFeet);
        handleHeightChange();
    }

    function handleInchChange (e) {
        let newInches = e.target.value;
        if (newInches.length === 0) {
            newInches = 0;
        }
        setInches(newInches);
        handleHeightChange();
    }

    function handleHeightChange () {
        const FEET_TO_CM = 30.48;
        const IN_TO_CM = 2.54;
        const totalHeight = feet * FEET_TO_CM + inches * IN_TO_CM;
        heightChange(totalHeight);
    }

    return (
        <div className="form-inputs">
            <label htmlFor="product_name">Gewicht</label>
            <input
                id="product_name"
                type="text"
                maxLength="6"
                className="form-control"
                placeholder="(lbs)"
                onChange={handleWeightChange}
            />

            <label htmlFor="product_name">Leeftijd</label>
            <input
                id="product_name"
                type="text"
                maxLength="3"
                className="form-control"
                placeholder="(years 0-120)"
                onChange={handleAgeChange}
            />

            <label htmlFor="product_name">Hoogte - Voet</label>
            <input
                id="product_name"
                type="number"
                maxLength="5"
                className="form-control"
                name="feet"
                onChange={handleFeetChange}
            />
            <label htmlFor="product_name">Hoogte - Inches</label>
            <input
                id="product_name"
                type="number"
                maxLength="5"
                className="form-control"
                name="inches"
                onChange={handleInchChange}
            />
        </div>
    );
}

export default ImperialForm;
