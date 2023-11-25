import React, {useState} from 'react';
import './Counter.scss'

export const Counter = () => {
    let [value, setValue] = useState(0)
    const increment = () => {
        setValue(++value)
    }
    const decrement = () => {
        setValue(--value)
    }
    return (
        <div>
            <div>{value}</div>
            <button onClick={increment}>inc</button>
            <button onClick={decrement}>decr</button>
        </div>
    );
};

