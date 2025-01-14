import React, { useReducer, useState } from 'react';
const initialState = {
    Todos: [],
}
function reducer(state,action) {
    switch(action.type) {
        case 'ADD_TODO':
            return { ...state, Todos: [...state.Todos, action.payload] };
        case 'DELETE_TODO':
            return { ...state, Todos: state.Todos.filter((itm) => itm !== action.payload) };
        default:
            return state;
    }
}
const TodoWithReducer = () => {
    const[state, dispatch] = useReducer(reducer,initialState);
    const [TodoValue, setTodoValue] = useState('');
    const handleSubmit = () => {
        console.log(TodoValue)
        dispatch({type: 'ADD_TODO',payload: TodoValue});
        setTodoValue('');
    }
    const handleDelete = (selectedTodo) => {
        dispatch({type: 'DELETE_TODO',payload: selectedTodo})
    }
    return (
        <div>
        <div>
            <input value={TodoValue} onChange={(e) => setTodoValue(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <ul>
        {state.Todos.map((itm, index) => (
            <li key={index}>{itm} <button onClick={() => handleDelete(itm)}>Delete</button></li>
        ))}
        </ul>
        </div>
    );
}

export default TodoWithReducer;
