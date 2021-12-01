import './Expenses.css';

import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

interface IExpense {
  expenses: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
}

export default function Expenses({ expenses }: IExpense): JSX.Element {
  const [filterYear, setFilterYear] = useState<string>('2021');
  // eslint-disable-next-line
  console.log(filterYear);

  return (
    <Card className="expenses">
      <ExpensesFilter filterYear={filterYear} setFilterYear={setFilterYear} />
      {expenses.map(expense => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}
