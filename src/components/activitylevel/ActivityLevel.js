import React from 'react';
import './ActivityLevel.css';

function ActivityLevel (props) {
    function handleChange (e) {
        const activity = e.target.value;
        props.onChange(activity);
    }

    return (
        <div className="activity-level">
            <label htmlFor="activity">Activiteiten niveau</label>
            <select name="activity" id="activity" className="browser-default custom-select" onChange={handleChange}>
                <optgroup>
                    <option value="" disabled selected>Selecteer uw activiteitenniveau</option>
                    <option value="none">Geen lichaamsbeweging (of heel weinig)</option>
                    <option value="light">Lichte inspanning (1-3 dagen per week)</option>
                    <option value="moderate">Matige lichaamsbeweging (3-5 dagen per week)</option>
                    <option value="heavy">Zware inspanning (6-7 dagen per week)</option>
                    <option value="v-heavy">Zeer zware inspanning (twee keer per dag/actieve baan)</option>
                </optgroup>
            </select>
        </div>
    );
}

export default ActivityLevel;
