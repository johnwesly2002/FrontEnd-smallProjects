import React, { useState, useEffect } from 'react'
import "./ReactTypeWriterStyles.css";
export default function ReactTypeWriter() {
    const[text, setText] = useState("");
    const[displayText, setdisplayText] = useState("");
    const [cnt, setCnt] = useState(0);

    const handleDisplayTypewriting = () => {
      if (cnt < text.length) {
          setdisplayText((prev) => prev + text[cnt]);
        setCnt((prev) => prev + 1);
      }
    };
    useEffect(() => {
  
      const interval = setInterval(handleDisplayTypewriting, 100); 
      return () => clearInterval(interval);
    }, [cnt]);
  return (
    <div className='mainContainer'>
    <span className='headingText'>ReactTypeWriter</span>
    <div>
    <input value={text} onChange={(e) => setText(e.target.value)} />
    <button onClick={handleDisplayTypewriting}>Display TypeWritering Effect</button>
    </div>
    <span>{displayText}</span>
    </div>
  )
}
