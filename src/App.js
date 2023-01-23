// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Chair',
    amount: 378.99,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e6',
    title: 'Rug',
    amount: 433.19,
    date: new Date(2022, 5, 16),
  },
  {
    id: 'e7',
    title: 'Painting',
    amount: 468.89,
    date: new Date(2022, 2, 12),
  },
  {
    id: 'e8',
    title: 'LG Monitor',
    amount: 299.87,
    date: new Date(2022, 3, 12),
  },
];



function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }
  return (
    <div>
      <NewExpense onExpenseAdded = {addExpenseHandler}/>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
