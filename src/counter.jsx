import React,{useEffect, useRef, useState} from 'react';

const Counter = ({count, setCount}) => {
    const intervalRef = useRef(null);
    useEffect(() => {
        const intervalId =setInterval(() => {
            setCount((c) => c + 1);
        },1000);
        intervalRef.current = intervalId;
        return () => {clearTimeout(intervalId)}
    },[])

    useEffect(() => {
        if(count >= 10){
            setCount(0);
        }
    },[count])
    return (
        <div className='App'>
            <p>Count is {count}</p>
        </div>
    );
}
export default Counter;