import React, { useEffect, useState } from 'react'
import "./style.css"

const ExpenseForm = ({expenseData: editExpenseData,
   addExpense,
  updateExpenseHandler,
 }) => {
    const [expenseData , setExpenseData] = useState({
        title: "",
        price: "",
        date : "",
 });
useEffect(() =>{
  setExpenseData ({
    title : editExpenseData?.title??'',
    price :editExpenseData?.price?? '',
    date :editExpenseData?.date?? '',
  });
 },[editExpenseData]);
const onChangeHandler = (e) => {
  setExpenseData((prevData) =>({
    ...prevData,[e.target.name]:e.target.value,
  }));
}
const onSubmitHandler  = (e) => {
e.preventDefault();
editExpenseData !== null 
? updateExpenseHandler({id:editExpenseData?.id,...expenseData})
: addExpense({
  id:Math.floor(Math.random()*100),
  ...expenseData,
})
// console.log(expenseData)
setExpenseData({
  title: '',
  price: '',
  date: '',
});
};

return (<>
<h1 className='heading'>Expense Form</h1>
<div className='formStyling'>
<form onSubmit={onSubmitHandler} className='form'>
    <div className='form-info'>
    <label htmlFor="expenseTitle">Expense Title:</label>
    <input type='text' id="expenseTitle" name='title' onChange={onChangeHandler} value={expenseData.title} />
    </div>
    <div className='form-info'>
    <label htmlFor="expensePrice">Expense Price:</label>
    <input type='number' id="expensePrice" name='price' onChange={onChangeHandler} value={expenseData.price} />
    </div>
    <div className='form-info'>
    <label htmlFor="expenseDate">Purchasing Date:</label>
    <input type='date' id="expenseDate" name='date' onChange={onChangeHandler} value={expenseData.date} />
    </div>
    
   <button className='add-btn' type='submit'> {editExpenseData!==null?'Update':'Add'}</button>
   
</form>
</div>
</>
  )
};

export default ExpenseForm