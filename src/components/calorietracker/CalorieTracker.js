import React, { useState, useEffect } from 'react';
import AddItemForm from './../../components/additemform/AddItemForm';
import RenderItem from '../renderitem/RenderItem';
import './CalorieTracker.css';

function CalorieTracker() {
    const [items, setItems] = useState([]);
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) setItems(items);
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        const totalCalories = localStorage.getItem('totalCalories');
        if (totalCalories) setTotalCalories(parseInt(totalCalories));
    }, []);

    useEffect(() => {
        localStorage.setItem('totalCalories', totalCalories);
    }, [totalCalories]);

    function updateItem(index, newItem) {
        setItems(
            items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
        );
    }

    function addItem(item) {
        setItems([...items, item]);
        setTotalCalories(totalCalories + parseInt(item.calorie));
    }

    function removeItem(index) {
        const removedItem = items[index];
        setItems(items.filter((item, i) => i !== index));
        setTotalCalories(totalCalories - parseInt(removedItem.calorie));
    }

    return (
        <div className='calorie-app-container'>
            <AddItemForm addItem={addItem} />
            {items.length === 0 ? (
                <p>Hou je calorieën per product bij:</p>
            ) : (
                <>
                    <h3>Totaal aantal calorieën: {totalCalories}</h3>
                    {items.map((item, index) => (
                        <RenderItem
                            item={item}
                            key={index}
                            index={index}
                            updateItem={updateItem}
                            removeItem={removeItem}
                        />
                    ))}
                </>
            )}
        </div>
    );
}

export default CalorieTracker;
