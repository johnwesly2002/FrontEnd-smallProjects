import React, {useState} from 'react';


const TodoLocal = () => {
    const handleLocalStorage = () => {
        if(localStorage.getItem('todos')){
         return JSON.parse(localStorage.getItem('todos'));
        }else{
        return [];
        }
    }
    const[todos, setTodos] = useState(handleLocalStorage());
    const[value, setValue] = useState('');
    const handleTodo = () => {
        setTodos((prev) => {
           const todo = [...prev,value];
           localStorage.setItem('todos',JSON.stringify(todo));
           return todo;
        });
        setValue('');
    }
    const handleSort = () => {
        setTodos([...todos.sort()]);
    }

    const handleReverseSort = () => {
        setTodos([...todos.sort().reverse()]);
    }

    return (
        <div>
        <div>
          <input  placeholder='Enter todo' value={value} onChange={(e) => setValue(e.target.value)} />
          <button type='submit' onClick={handleTodo}>Add Todo</button>
          <button type='submit' onClick={handleSort}>AToZ</button>
          <button type='submit' onClick={handleReverseSort}>ZtoA</button>
        </div>
            <ul>
        {todos.map((todo,index) => (
            <li key={index}>{todo}</li>
        ))}
        </ul>
        </div>
    );
};

export default TodoLocal;
