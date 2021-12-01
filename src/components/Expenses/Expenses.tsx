import './Expenses.css';

import { useState } from 'react';

import { IExpense } from '../../App';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

export interface IExpenses {
  expenses: IExpense[];
}

export default function Expenses({ expenses }: IExpenses): JSX.Element {
  const [filterYear, setFilterYear] = useState('2021');

  const filteredExpenses = expenses.filter(
    expense => expense.date.getFullYear() === parseInt(filterYear),
  );

  return (
    <Card className="expenses">
      <ExpensesFilter filterYear={filterYear} setFilterYear={setFilterYear} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
