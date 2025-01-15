import React,{useState} from 'react';

const LocalStorageCounter = () => {
    const getLocalStorage  = () => {
        let val = localStorage.getItem('count');

        return val != undefined ? JSON.parse(val) : 0;

    }
    const [count, setCount] = useState(getLocalStorage);
    const handleIncrement = () => {
        setCount((prev) => {
            let val = prev + 1;
            localStorage.setItem('count', val);
            return val;
        });
    }
    const handleDecrement = () => {
        setCount((prev) => {
            let val = prev - 1;
            localStorage.setItem('count', val);
            return val;
        });

    }
    return (
        <>
        <div>
        <span>{count}</span>
        </div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </>
    );
}

export default LocalStorageCounter;
