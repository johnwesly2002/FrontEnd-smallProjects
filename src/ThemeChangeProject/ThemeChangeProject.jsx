import React, { useContext } from 'react';
import {ThemeContext} from '../App';
const ThemeChangeProject = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    return (
        <div style={{height: '100vh', backgroundColor: theme == 'light' ? 'white' : 'black'}}>
        <span style={{color: theme == 'light' ? 'black' : 'white'}}>{theme}</span>
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
        </div>
    );
}

export default ThemeChangeProject;
