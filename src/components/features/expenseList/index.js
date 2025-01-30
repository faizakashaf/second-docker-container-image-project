import React  from 'react'
import "./style.css"
import Expense from './expense'

const ExpenseList = ({expenses,getEditHandler,deleteExpense}) => {
  // console.log(props.expenses);
//   return (
//  <div>
//   {props.expenses.length === 0 && <h3>No Expense Object Found</h3>}
//   <ul className='lists'>
//   {props.expenses && 
//   props.expenses.length > 0 &&
// props.expenses.map((data)=>(
// <Expense expenseList={data} key={data.title} />
// ))}
//  </ul>
// </div>
//   );
// };
return (
  <>
  <h1 className='heading'>Expense Data</h1>
  <ul className='lists'>
{expenses&& 
expenses.length >0 &&
expenses.map((expense) => (
  <Expense
  key = {expense.id} 
  expense = {expense}
  getEditHandler = {getEditHandler}
  deleteExpense={deleteExpense}/> 
))}
</ul>
</>
)
};
 export default ExpenseList;