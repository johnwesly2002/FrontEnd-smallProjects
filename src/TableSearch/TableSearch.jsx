import React, { useEffect, useState } from 'react';

const TableSearch = () => {
    const[tableData, setTableData] = useState([]);
    const[rawtableData, setrawTableData] = useState([]);
    const[tableColumns,setTableColumns] = useState([]);
    const[searchText,setSearchText] = useState("");
    useEffect(() =>{
        fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(resp => {
            console.log(resp);
            const columns = Object.keys(resp.todos[0]).map((key) => {
                return {
                    column: key,
                };
            });
            setTableColumns(columns);
            setTableData(resp.todos);
            setrawTableData(resp.todos);
        });

    },[]);

    const handleReset = () => {
        setTableData(rawtableData);
        setSearchText("");
    }

    const handleSearchText = (e) => {
        const searchValue = e.trim().toLowerCase();
        setSearchText(e);
        if(e == ""){
            setTableData(rawtableData);
        }else{
        setTableData(() => {
            const updatedData = tableData.filter((res) => res.todo.toLowerCase().includes(searchValue));
            return updatedData;
        })
    }
    }

    return (
        <div style={{ display: 'flex',marginTop:10,flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{flexDirection:'row'}}>
        <input type='text' value={searchText} onChange={(e) => handleSearchText(e.target.value)} />
        <button onClick={handleReset}>Reset</button>
        </div>
        <table border={1}style={{ borderCollapse: 'collapse', textAlign: 'center' }} >
            <thead>
                <tr >
            {tableColumns.map((res,index) => {
                <th key={index}>{res.column}</th>
                
            })} 
            </tr>
            </thead>
            <tbody>
                {tableData.map((res,rowindex) => 
                    <tr key={rowindex}>
                        {tableColumns.map((col,colindex) => 
                            <td key={colindex}>{res[col.column]}</td>
                        )}
                    </tr>
                    
            )}

            </tbody>
        </table>
            
        </div>
    );
}

export default TableSearch;
