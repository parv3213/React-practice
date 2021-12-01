import './ExpenseItem.css';

import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

interface IExpenseItem {
  title: string;
  amount: number;
  date: Date;
}

export default function ExpenseItem(props: IExpenseItem): JSX.Element {
  const [title, setTitle] = useState(props.title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={() => setTitle('updated')}>Change title</button>
        </div>
      </Card>
    </li>
  );
}
