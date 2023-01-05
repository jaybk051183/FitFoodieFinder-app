import React,{useState} from "react";
import './RenderItem.css';

function RenderItem({ updateItem, removeItem, item, index }) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className='item-card'>
            <div className='card-body'>
                {isEditing ? (
                    <input
                        type='text'
                        name='title'
                        id='title'
                        required
                        value={item.title}
                        onChange={e => updateItem(index, { title: e.target.value })}
                    />
                ) : (
                    <h5 className='card-title'>{item.title}</h5>
                )}
                {isEditing ? (
                    <input
                        type='number'
                        name='calorie'
                        id='calorie'
                        required
                        value={item.calorie}
                        onChange={e => updateItem(index, { calorie: e.target.value })}
                    />
                ) : (
                    <p className='card-text'>
                        {' '}
                        U heeft {item.calorie} calorieën verbruikt
                    </p>
                )}
                <br/>
                <div className='button-container'>
                    <button className='btn-delete' onClick={() => removeItem(index)}>
                        Wissen
                    </button>
                    <button
                        className='btn-edit'
                        onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? 'Klaar' : 'Bewerken'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RenderItem;
