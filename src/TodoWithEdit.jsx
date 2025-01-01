import React, { useEffect, useState } from 'react';

const TodoWithEdit = () => {
    const [TodosData, setTodos] = useState([]);
    const[todo, setTodo] = useState("");
    const[editTodo,setEditTodo] = useState(null);
    const[TodoDataUpdate, setTodoDataUpdate] = useState("");

    useEffect(() => {
        handleFetchTodo();
    },[])

    const handleFetchTodo = () => {

        fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(resp =>  {
            setTodos(resp.todos);
        })
        .catch((err) => console.log(err));
        
    }
    useEffect(() => {
        console.log(TodosData);
    },[TodosData])
    const handleAddTodo = () => {
        setTodos((prev) => [...prev,{completed: false,id:Date.now(),todo: todo,userId: Date.now()}]);
        setTodo("");
    }

    const handleEditTodo = (ind,todo) => {
        setEditTodo(ind);
        setTodoDataUpdate(todo);

    }
    const handleEdit = () => {
        const editedTodo = TodosData.map((item) => item.id - 1 === editTodo ? {...item,todo: TodoDataUpdate} : item);
        setTodos(() => editedTodo);
        setEditTodo(null);
        setTodoDataUpdate("");
    }
    return (
        <div>
            <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ol>
            {TodosData.map((item,index) => (
                editTodo === index ? <div key={index}>
                    <input type='text' value={TodoDataUpdate} onChange={(e) => setTodoDataUpdate(e.target.value)}/>
                    <button onClick={handleEdit}>Edit</button>
                </div>  :
                <li key={index} onClick={() => handleEditTodo(index,item.todo)}>{item.todo}</li>
            
            ))}
            </ol>
        </div>
    );
}

export default TodoWithEdit;
