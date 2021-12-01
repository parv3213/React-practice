import './Expenses.css';

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
    <div className="expenses">
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
    </div>
  );
}
