import React, {useState, useEffect} from 'react';
import './Result.css';

function Result (props) {
    const [weightType, setWeightType] = useState('');
    const [weightValue, setWeightValue] = useState('');

    useEffect(() => {
        if (props.measurementType === "metric"){
            setWeightType('kg');
            setWeightValue(0.5);
        } else {
            setWeightType('lbs');
            setWeightValue(1);
        }
    }, [props.measurementType]);

    return (
        <div className="entry-form">
            <form>
                <div className="calorie-result">
                    <h3>{props.calories} calorieën</h3>
                    <p>om uw huidige gewicht te behouden</p>
                </div>

                <table className="table">
                    <thead>
                    <tr>
                        <th>Gewicht toename/afname</th>
                        <th>Aankomen</th>
                        <th>Afvallen</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{weightValue} {weightType} per week</td>
                        <td>{props.calories + 500}</td>
                        <td>{props.calories - 500}</td>
                    </tr>
                    <tr>
                        <td>{weightValue * 2} {weightType} per week</td>
                        <td>{props.calories + 1000}</td>
                        <td>{props.calories - 1000}</td>
                    </tr>

                    </tbody>

                </table>
            </form>
        </div>
    );
}

export default Result;
