import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


function Expenses(props) {
  const defaultYear = '2022'
  const [filteredYear, setFilteredYear] = useState(defaultYear);

  const onFilterHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.expenses.filter((e) => (e.date.getFullYear().toString() === filteredYear));

  

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter onFilter={onFilterHandler} selectedYear={filteredYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );

}

export default Expenses;