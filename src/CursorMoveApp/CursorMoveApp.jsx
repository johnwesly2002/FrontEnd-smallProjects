import React, { useRef } from 'react'
import "./CursorMoveStyles.css";
import Circle from './Circle';
export default function CursorMoveApp() {
    const rootref = useRef();
    const circleRef = useRef();
    const handleMouseMove = (e) => {
        const circle = circleRef.current;
        setTimeout(() => {
            circle.style.left = `${e.clientX}px`;
            circle.style.top = `${e.clientY}px`;

        },200)
    }
  return (
    <div className='mainContainer' ref={rootref} onMouseMove={handleMouseMove}>
        <span  className='headingText'>CursorMoveApp</span>
        <div>
            <Circle ref={circleRef} />
        </div>
    </div>
  )
}
