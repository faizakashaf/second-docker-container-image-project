import React, { useState }  from 'react'
import DefaultLayout from "./components/layout/DefaultLayout";
import ExpenseForm from './components/features/expenseForm';
import ExpenseList from './components/features/expenseList';

// const expenses = [{
 
//   title:"aloo",
//   price: "77",
//   date : "08/10/2023"
// },
// {
 
// title:"matar",
// price: "80",
// date : "04/8/2022"
// }]

 const App = () => {
const [expenseList, setExpenseList] = useState([]);
const [expenseData , setExpenseData] =useState(null);

 const AddExpenseHandler = (newdata) => {
  setExpenseList ((prevState) =>  
  [newdata,...prevState])
}  
const updateExpenseHandler = (data) => {
const updateArr = expenseList.map((expenseArr) => {
if (expenseArr.id === data.id ){
  return {
    id: data.id,
    title: data.title,
    price : data.price,
    date: data.date,
  };
}

return expenseArr;
});
setExpenseList(updateArr);
setExpenseData(null);
};

const editHandler = (data) =>{
setExpenseData(data);
};

const deleteExpenseHandler = (id) => {
const filterArr = expenseList.filter((data) => +data.id !== +id);
setExpenseList(filterArr);
}


return (
    <DefaultLayout>
      <ExpenseForm 
      expenseData = {expenseData}
      addExpense = {AddExpenseHandler}
      updateExpenseHandler = {updateExpenseHandler} /> 

      <ExpenseList expenses = {expenseList}
      getEditHandler = {editHandler}
      deleteExpense = {deleteExpenseHandler}/>

    </DefaultLayout>
  );
};
export default App







