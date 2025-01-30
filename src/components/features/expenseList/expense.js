import React from 'react'
import "./style.css"

const Expense = ({expense, getEditHandler, deleteExpense}) => {
//   const Year = new Date (expenseList.date).getFullYear();
//   const Month = new Date (expenseList.date).getMonth() +1;
//   const day = expenseList.date.slice(8);
//  console.log(Year,Month,day)
   const editDataHandler =() =>{
    console.log(expense);
    getEditHandler(expense);
   };
   const deleteHandler = () =>{
    deleteExpense(expense.id);
   };

  return (
    
//  <li className='items'>
// <div>{expenseList.title}</div>
// <div>{expenseList.price}</div>
// <div>{expenseList.date}</div>
// <button className='btn edit' type='button'>Edit</button>
// <button className='btn dlt' type='button'>Delete</button>
//  </li>
<li className='list-item'>
  <div>{expense.title}</div>
  <div>$ {expense.price}</div>
  <div >
{expense.date}
  </div>
<button type='button'className='edit-btn buttons' onClick={editDataHandler}>
  Edit</button>
  <button type='button' className='dlt-btn buttons' onClick={deleteHandler}>
        Delete
      </button>
</li>

  )
}

export default Expense;