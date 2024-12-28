import React, { useEffect, useState } from 'react';

const AccordianExample = () => {
    const[data, setData] = useState([]);
    const[items,setItems] = useState([]);
    useEffect(() => {
        patchData();
    },[])
    async function patchData () {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setData(json))
    }

    const handleClick = (e) => {
        setItems((prevItems) => {
            if(prevItems.includes(e)){
                return prevItems.filter((v) => v !== e);
            }else{
                return [...prevItems,e];
            }
        })
    }

    return (
        <div>
            {data.map((ResponseData,index) => {
                return(
                <div key={index} style={{border: '10px solid white', width: '100%'}}>
                <div style={{backgroundColor: 'black', color:'white',borderWidth: 30,borderColor: 'white'}} onClick={() => handleClick(ResponseData.id)}>{ResponseData.title}</div>
                {items.includes(ResponseData.id) && <div>{ResponseData.body}</div>}
                </div>
                );
        })}
        </div>
    );
}

export default AccordianExample;
