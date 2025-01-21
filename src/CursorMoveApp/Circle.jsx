import React,{forwardRef} from 'react'
import "./CursorMoveStyles.css";
const Circle = forwardRef((props,ref) =>  {
  return (
    <div ref={ref} className='circle'></div>
  )
});
export default Circle;