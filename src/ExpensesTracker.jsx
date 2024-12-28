import React, { useState } from "react";

const ExpensesTracker = () => {
    const[ExpensesName, setExpensesName] = useState('');
    const[Expenses, setExpenses] = useState('');
    const[ExpensesList, setExpensesList] = useState([{ExpenseName: '', Expenses:'' }]);
    const handleSubmit = () => {
        console.log("Submitted successfully");
        setExpensesList((prev) => ([...prev,{ExpensesName: ExpensesName, Expenses: Expenses}]));
    }
    return(
        <div style={{display: 'inline-flex', flexDirection: 'column',gap: 15, justifyContent: 'center'}}>
        <input type="text" value={ExpensesName} placeholder="Enter ExpensesName" onChange={(e) => setExpensesName(e.target.value)} />
        <input type="number" value={Expenses} placeholder="Enter Expenses" onChange={(e) => setExpenses(e.target.value)} />
        <button type="submit" style={{backgroundColor: 'black', color: 'white'}} onClick={() => handleSubmit()}>Submit</button>
        <table>
            <thead>
                <tr>
                    {Object.keys(ExpensesList[0]).map((item, index) => (
   
                        <td key={index}>{item}</td>
           
                    ))}
                </tr>
                
            </thead>
            <tbody>
            {ExpensesList.map((item, index) => (
                <tr key={index}>
                <td>{item.ExpensesName}</td>
                <td>{item.Expenses}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );

}
export default ExpensesTracker;