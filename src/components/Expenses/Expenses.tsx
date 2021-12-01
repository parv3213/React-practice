import './Expenses.css';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

interface IExpense {
  expenses: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
}

export default function Expenses({ expenses }: IExpense): JSX.Element {
  return (
    <Card className="expenses">
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
