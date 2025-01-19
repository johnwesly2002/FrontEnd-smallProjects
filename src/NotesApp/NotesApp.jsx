import React, { useState } from 'react'
import "./NotesAppStyles.css";
export default function NotesApp() {
    const[Notes, setNotes] = useState([]);
    const[inputNote, setInputNote] = useState({
        title: '',
        desc: ''
    });
    const handleDelete = (itm) => {
        setNotes(Notes.filter((Note) => Note.title != itm.title))
    }
    const handleAddNotes = (itm) => {
        if(inputNote.title.length > 0 && inputNote.desc.length > 0){
        setNotes((prev) => [{...inputNote, pinned: false},...prev]);
        setInputNote({
            title: '',
            desc: ''
        });
    }
    }
    const handlePin = (itm) => {
        setNotes((prev) => 
        prev.map((Note) => Note.title == itm.title ? {...Note, pinned: !Note.pinned} : Note))
    }
  return (
    <div className='mainContainer'>
    <span className='headingText'>NotesApp</span>
    <div className='Notes_Container'>
    <div className='NotesForm'>
        <input className='input' type='text' value={inputNote.title} placeholder='Title' onChange={(e) => setInputNote({...inputNote,title: e.target.value})} />
        <textarea className='TextAreainput' type='text' value={inputNote.desc} placeholder='Type here....'  onChange={(e) => setInputNote({...inputNote, desc: e.target.value})} />
        <button className='SubmitButton' onClick={handleAddNotes}>Add Notes</button>
    </div>
    {Notes.filter((Note) => Note.pinned).map((Note,Index) => (
        <div className='NoteContainer' key={`pinned - ${Index}`}>
         <div className='ButtonCon'>
            <span className='DescText'>Pinned</span>
            <button onClick={() => handleDelete(Note)}>Delete</button>
            <button onClick={() => handlePin(Note)}>Pin</button>
         </div>
         <div className='TitleCon'>
         <span className='TitleText' >{Note.title}</span>
         <span className='DescText'>{Note.desc}</span>
         </div>
        </div>
    ))}
     {Notes.filter((Note) => !Note.pinned).map((Note,Index) => (
        <div className='NoteContainer' key={`unpinned - ${Index}`}>
         <div className='ButtonCon'>
            <button onClick={() => handleDelete(Note)}>Delete</button>
            <button onClick={() => handlePin(Note)}>Pin</button>
         </div>
         <div className='TitleCon'>
         <span className='TitleText' >{Note.title}</span>
         <span className='DescText'>{Note.desc}</span>
         </div>
        </div>
    ))}
    </div>
    </div>
  )
}
