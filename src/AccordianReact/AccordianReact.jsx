import React, { useEffect, useState } from 'react'
import AccordianComponent from './AccordianComponent';
export default function AccordianReact() {
  const[data, setData] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then((resp) => resp.json())
    .then((res) => setData(res.products))
    .catch((error) => console.log(error))
  },[])
  return (
    <div className='mainContainer'>
    <span className='headerName'>AccordianReact</span>
    <div className='AccordianContainer'>
     {data.map((itm, index) => (
       <AccordianComponent key={index} itm={itm} />
     ))}
    </div>
    </div>
  )
}
