import React, { useState } from 'react'
import "./AccordiansStyles.css";
export default function AccordianComponent({itm}) {
    const[visible, setVisible] = useState(false);
  return (
    <div className='AccordianOuter'  style={{height: visible ? 100 : 50}}>
        <div className='TitleContainer'>
        <span>{itm.title}</span>
        <button style={{border: 'none', fontSize: 25, backgroundColor: 'transparent', color: 'blue'}} onClick={() => setVisible(!visible)}>{visible ? "-" : "+"}</button>
        </div>
        {visible && <div className='AccordianInner' >{itm.description}</div>}
    </div>
  )
}
