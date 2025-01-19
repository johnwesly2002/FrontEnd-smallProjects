import React, { useState } from 'react'
import "./TodoDragDropStyles.css";
export default function TodoDragDrop() {
    // [
    //     { id: 1, text: "buy milk", status: "to-do" },
    //     { id: 2, text: "wash bike", status: "in-progress" },
    //     { id: 3, text: "do the budget", status: "done" },
    //     { id: 4, text: "call jane", status: "to-do" },
    //   ]
    const[Todos, setTodos] = useState(
        [
        { id: 1, text: "buy milk", status: "to-do" },
        { id: 2, text: "wash bike", status: "in-progress" },
        { id: 3, text: "do the budget", status: "done" },
        { id: 4, text: "call jane", status: "to-do" },
      ]
    );
    const handleDragStart = (e, Todo) => {
        e.dataTransfer.setData("todo", JSON.stringify(Todo));
      };
    
      const handleDrop = (e, newStatus) => {
        e.preventDefault();
        const todoData = e.dataTransfer.getData("todo");
    
        if (!todoData) {
          console.error("No todo data found in event");
          return;
        }
        console.log(newStatus);
        const draggedTodo = JSON.parse(todoData); 
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === draggedTodo.id ? { ...todo, status: newStatus } : todo
          )
        );
      };
    

    const handleDragOver = (e) => {
        e.preventDefault();
    }
  return (
    <div className='mainContainer'>
    <span className='headingText'>TodoDragDrop</span>
    <div className='TodoBoard'>
    <div onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "to-do")}>
    <span className='SectionText'>Todo Section</span>
    {Todos.filter((Todo) => Todo.status === 'to-do').map((Todo, index) => (
        <div draggable className='container' key={index} onDragStart={(e) => handleDragStart(e, Todo)}>
            <span>{Todo.text}</span>
            <span>{Todo.status}</span>
        </div>
    ))}
    </div>
    <div onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "in-progress")}>
    <span className='SectionText'>InProgress Section</span>
    {Todos.filter((Todo) => Todo.status === 'in-progress').map((Todo, index) => (
        <div draggable className='container' key={index} onDragStart={(e) => handleDragStart(e, Todo)}>
            <span>{Todo.text}</span>
            <span>{Todo.status}</span>
        </div>
    ))}
    </div>
    <div  onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "done")}>
    <span className='SectionText'>Done Section</span>
    {Todos.filter((Todo) => Todo.status === 'done').map((Todo, index) => (
        <div draggable className='container' key={index} onDragStart={(e) => handleDragStart(e, Todo)}>
            <span>{Todo.text}</span>
            <span>{Todo.status}</span>
        </div>
    ))}
    </div>
    </div>
    </div>
  )
}
