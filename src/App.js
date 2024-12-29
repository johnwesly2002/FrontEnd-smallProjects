import './App.css';
import Counter from './counter';
import {useState} from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import BasicForm from './form';
import MemoExample from './memoExample';
import TodoLocal from './TodoLocal';
import AccordianExample from './Accordian/AccordianExample';
import ExpensesTracker from './ExpensesTracker';
import ListDeleteExample from './ListDeleteExample';


function App() {
  const[count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <Link to='/counter'>Go To Counter</Link>
        <div><Link to='/BasicForm'>Go To Form</Link></div>
        <div><Link to='/memoExample'>Go To memoExample</Link></div>
        <div><Link to='/Todo'>Go To TodoList</Link></div>
        <div><Link to='/Accordian'>Go To Accordian Example</Link></div>
        <div><Link to='/ExpensesTracker'>Go to ExpensesTracker</Link></div>
        <div><Link to='/ListDeleteExample'>Go to ListDeleteExample</Link></div>
      </div>,
    },
    {
      path: '/counter',
      element: <Counter count={count} setCount = {setCount} />,
    },
    {
      path: '/BasicForm',
      element: <BasicForm />,
    },
    {
      path: '/Todo',
      element: <TodoLocal />,
    },
    {
      path: '/memoExample',
      element: <MemoExample />,
    },
    {
      path: '/Accordian',
      element: <AccordianExample />,
    },
    {
      path: '/ExpensesTracker',
      element: <ExpensesTracker />,
    },
    {
      path: '/ListDeleteExample',
      element: <ListDeleteExample />
    }
  ]);
  return (
    <div className='App'>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
