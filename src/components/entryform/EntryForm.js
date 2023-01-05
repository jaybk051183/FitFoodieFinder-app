import React, {useState} from 'react';
import MetricForm from './../metricform/MetricForm';
import ImperialForm from './../imperialform/ImperialForm';
import ActivityLevel from './../activitylevel/ActivityLevel';
import Result from './../result/Result';
import './EntryForm.css';

function EntryForm () {
    const [state, setState] = useState({
        age: '',
        gender: '',
        weight: '',
        activity: '',
        height: '',
        measurement: '',
        measurementSelected: false,
        result: '',
        showResult: false,
        resultForm: ''
    });

    function handleMeasurementChange (event) {
        setState({
            ...state,
            measurement: event.target.value,
            measurementSelected: true
        });
    }

    function changeGender (event) {
        setState({
            ...state,
            gender: event.target.value
        });
    }

    function changeWeight (newWeight) {
        setState({
            ...state,
            weight: newWeight
        });
    }

    function changeAge (newAge) {
        setState({
            ...state,
            age: newAge
        });
    }

    function changeHeight (newHeight) {
        setState({
            ...state,
            height: newHeight
        });
    }

    function changeActivity (newActivity) {
        setState({
            ...state,
            activity: newActivity
        });
    }

    function validEntry () {
        let fields = [state.gender, state.age, state.weight, state.height, state.activity];
        let i;

        for (i in fields) {
            if (fields[i].length === 0) {
                return false;
            }
        }

        if (state.age < 0 || state.age > 120) {
            return false;
        }
        if (state.weight < 0) {
            return false;
        }
        return state.height >= 0;
    }

    function getCalories () {
        if (validEntry()) {
            setState({
                ...state,
                showResult: true,
                resultForm: <Result calories={calculateCalories()} measurementType={state.measurement}/>
            });
        } else {
            alert("Please make sure that you have entered valid information in every field.");
        }
    }

    function calculateCalories()
    {
        const {gender, weight, height, age, activity} = state;
        let calories = (gender === 'male')
            ? 66.473 + (13.75116 * weight) + (5.033 * height) - (6.755 * age)
            : 655.0955 + (9.5634 * weight) + (1.8496 * height) - (4.6756 * age);
        switch (activity) {
            case 'none':
                calories *= 1.2;
                break;
            case 'light':
                calories *= 1.375;
                break;
            case 'moderate':
                calories *= 1.55;
                break;
            case 'heavy':
                calories *= 1.725;
                break;
            case 'v-heavy':
                calories *= 1.9;
                break;
        }
        return Math.round(calories);
    }

    return (
        <div>
            <div className="entry-form">
                <form>
                    <p>Selecteer meeteenheid:</p>
                    <div className="measurement-choice">
                        <input type="radio" id="metric" value="metric" checked={state.measurement === 'metric'}
                               onChange={handleMeasurementChange}/>
                        <label htmlFor="metric">Metrisch (kg/cm)</label>
                        <input type="radio" id="imperial" value="imperial"
                               checked={state.measurement === 'imperial'} onChange={handleMeasurementChange}/>
                        <label htmlFor="imperial">Imperiaal (lbs/voet+inch)</label>
                    </div>

                    <div className="gender-choice">
                        <label htmlFor="gender">Geslacht</label>
                        <select name="gender" id="gender" className="browser-default custom-select"
                                onChange={changeGender}>
                            <option value="" disabled selected>Kies je geslacht</option>
                            <option value="male">Man</option>
                            <option value="female">Vrouw</option>
                        </select>
                    </div>

                    {state.measurement === 'metric' &&
                        <MetricForm weightChange={changeWeight} ageChange={changeAge}
                                    heightChange={changeHeight}/>}
                    {state.measurement === 'imperial' &&
                        <ImperialForm weightChange={changeWeight} ageChange={changeAge}
                                      heightChange={changeHeight}/>}
                    {state.measurementSelected && <ActivityLevel onChange={changeActivity}/>}
                    {state.measurementSelected &&
                        <button type="button" className="btn btn-primary" id="calculate-btn"
                                onClick={getCalories}>Bereken mijn calorieën</button>}
                </form>
            </div>
            <div>
                {state.showResult && state.resultForm}
            </div>
        </div>
    )
}

export default EntryForm;

