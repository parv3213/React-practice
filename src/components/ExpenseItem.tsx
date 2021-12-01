import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';

interface IExpenseItem {
  title: string;
  amount: number;
  date: Date;
}

export default function ExpenseItem({ title, amount, date }: IExpenseItem): JSX.Element {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}
