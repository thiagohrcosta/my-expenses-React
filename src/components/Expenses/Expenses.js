import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) =>{

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHanlder = selectYear => {
    setFilteredYear(selectYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return(
    <div>
      <Card className="expenses">
      <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHanlder} 
      />
      <ExpensesList items={filteredExpenses} />              
      </Card>
    </div>
  )

}

export default Expenses;