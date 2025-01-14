import React, { useReducer } from 'react';
const initialState = {
    username: '',
    email: '',
    age: ''
}
function reducer(state,action) {
    switch(action.type){
        case 'setName':
        return {...state, username: action.payload};
        case 'setEmail':
        return {...state, email: action.payload};
        case 'setAge':
        return {...state, age: action.payload};
        default:
            return state;

    }
}
const UseReducerFormData = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10}}>
        <input type='text' placeholder='Enter username' value={state.username} onChange={(e) => dispatch({type: 'setName', payload: e.target.value})} />
        <input type='text' placeholder='Enter email' value={state.email} onChange={(e) => dispatch({type: 'setEmail',payload:  e.target.value})} />
        <input type='text' placeholder='Enter age' value={state.age} onChange={(e) => dispatch({type: 'setAge',payload:  e.target.value})} />
        <button onClick={() => console.log(state)}>Submit</button>
        </div>
    );
}

export default UseReducerFormData;
