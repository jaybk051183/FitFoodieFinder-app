import React from 'react';
import './MetricForm.css';

function MetricForm(props) {
    function handleWeightChange(e){
        const weight = e.target.value;
        props.weightChange(weight);
    }

    function handleAgeChange(e){
        const age = e.target.value;
        props.ageChange(age);
    }

    function handleHeightChange (e){
        const height = e.target.value;
        props.heightChange(height);
    }

    return (
        <div className="form-inputs">
            <label htmlFor="product_name">Gewicht</label>
            <input id="product_name" type="text" maxLength="6" placeholder="(kg)" className="form-control" onChange={handleWeightChange} />

            <label htmlFor="product_name">Leeftijd</label>
            <input id="product_name" type="text" maxLength="3" placeholder="(jaren 0-120)" className="form-control" onChange={handleAgeChange} />

            <label htmlFor="product_name">Hoogte</label>
            <input id="product_name" type="text" maxLength="5" placeholder="(cm)" className="form-control" onChange={handleHeightChange} />
        </div>
    );
}

export default MetricForm;


