import React, { useReducer } from 'react';
const initialState = {count : 0};
function reducer (state,action)  {
    switch(action.type) {
        case 'increment': 
        return {count: state.count + 1};
        case 'decrement': 
        return {count: state.count - 1};
        default:
        return state;
    }
}
const UseReducerCounterApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
        <span>Count: {state.count}</span>
        <button type='submit' onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button type='submit' onClick={() => dispatch({type: 'decrement'})}>decrement</button>

        </div>
    );
}

export default UseReducerCounterApp;
