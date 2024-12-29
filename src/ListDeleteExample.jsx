import React, { useState } from 'react';

const ListDeleteExample = () => {
    const[List, setList] = useState(['apple','banana','orange','grape','pineapple']);
    const[items,setItems] = useState([]);

    const handleClick = (index) => {
        setItems((prev) => {
            if(prev.includes(index)){
                return prev.filter((v) => index != v);
            }else{
                return [...prev,index];
            }
        })
    }
     
    const handleDelete = (index) => {
        setList(List.filter((item) => item != index));
    }

    return (
        <div>
            {List.map((res, index) => (
            <ul key={index}>
                <li>
                    <input  type='checkbox' onClick={() => handleClick(index)} />
                    {res}
                    {items.includes(index) && <button onClick={() => handleDelete(res)} >Delete</button>}
                    </li>
            </ul>
            ))}
            
        </div>
    );
}

export default ListDeleteExample;
