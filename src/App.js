import './App.css';
import Counter from './counter';
import {createContext, useState} from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import BasicForm from './form';
import MemoExample from './memoExample';
import TodoLocal from './TodoLocal';
import AccordianExample from './Accordian/AccordianExample';
import ExpensesTracker from './ExpensesTracker';
import ListDeleteExample from './ListDeleteExample';
import TodoWithEdit from './TodoWithEdit';
import TableSearch from './TableSearch/TableSearch';
import FormSubmit from './FormSubmit/FormSubmit';
import MaxCount from './maxCount/MaxCount';
import CssExample from './cssExample/CssExample';
import UseReducerCounterApp from './UseReducerCounterApp/UseReducerCounterApp';
import UseReducerFormData from './UseReducerFormData/UseReducerFormData';
import TodoWithReducer from './TodoWithuseReducer/TodoWithReducer';
import TabsComponent from './TabsComponent/TabsComponent';
import LocalStorageCounter from './LocalStorageCounter/LocalStorageCounter';
import ThemeChangeProject from './ThemeChangeProject/ThemeChangeProject';
import SimpleCartProject from './SimpleCartProject/SimpleCartProject';
import ButtonTestExample from './ButtonTestExample/ButtonTestExample';
import ListwithLoadMoreButton from './ListwithLoadMoreButton/ListwithLoadMoreButton';
import AccordianReact from './AccordianReact/AccordianReact';
import MemoryGame from './MemoryGame/MemoryGame';
import NotesApp from './NotesApp/NotesApp';
export const ThemeContext = createContext();
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
        <div><Link to='/TodoWithEdit'>Go to TodoWithEdit</Link></div>
        <div><Link to='/TableSearch'>Go to TableSearch</Link></div>
        <div><Link to='/MaxCount'>Go to MaxCount</Link></div>
        <div><Link to='/CssExample'>Go to CssExample</Link></div>
        <div><Link to='/UseReducerCounterApp'>Go to UseReducerCounterApp</Link></div>
        <div><Link to='/UseReducerFormData'>Go to UseReducerFormData</Link></div>
        <div><Link to='/TodoWithReducer'>Go to TodoWithReducer</Link></div>
        <div><Link to='/TabsComponent'>Go to TabsComponent</Link></div>
        <div><Link to='/LocalStorageCounter'>Go to LocalStorageCounter</Link></div>
        <div><Link to='/ThemeChangeProject'>Go to ThemeChangeProject</Link></div>
        <div><Link to='/SimpleCartProject'>Go to SimpleCartProject</Link></div>
        <div><Link to='/ButtonTestExample'>Go to ButtonTestExample</Link></div>
        <div><Link to='/ListwithLoadMoreButton'>Go to ListwithLoadMoreButton</Link></div>
        <div><Link to='/AccordianReact'>Go to AccordianReact</Link></div>
        <div><Link to='/MemoryGame'>Go to MemoryGame</Link></div>
        <div><Link to='/NotesApp'>Go to NotesApp</Link></div>


        
        
        
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
    },
    {
      path: '/TodoWithEdit',
      element: <TodoWithEdit />
    },
    {
      path: '/TableSearch',
      element: <TableSearch />
    },
    {
      path: '/FormSubmit',
      element: <FormSubmit />
    },
    {
      path: '/MaxCount',
      element: <MaxCount />
    },
    {
      path: '/CssExample',
      element: <CssExample />
    },
    {
      path: '/UseReducerCounterApp',
      element: <UseReducerCounterApp />
    },
    {
      path: '/UseReducerFormData',
      element: <UseReducerFormData />
    },
    {
      path: '/TodoWithReducer',
      element: <TodoWithReducer />
    },
    {
      path: '/TabsComponent',
      element: <TabsComponent />
    },
    {
      path: '/LocalStorageCounter',
      element: <LocalStorageCounter />
    },
    {
      path: '/ThemeChangeProject',
      element: <ThemeChangeProject />
    },
    {
      path: '/SimpleCartProject',
      element: <SimpleCartProject />
    },
    {
      path: '/ButtonTestExample',
      element: <ButtonTestExample />
    },
    {
      path: '/ListwithLoadMoreButton',
      element: <ListwithLoadMoreButton />
    },
    {
      path: '/AccordianReact',
      element: <AccordianReact />
    },
    {
      path: '/MemoryGame',
      element: <MemoryGame />
    },
    {
      path: '/NotesApp',
      element: <NotesApp />
    }
  ]);
  const [Theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={[Theme, setTheme]}>
    <div className='App'>
    <RouterProvider router={router} />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
