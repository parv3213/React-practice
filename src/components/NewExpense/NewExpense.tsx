import './NewExpense.css';

import { useState } from 'react';

import { IExpense } from '../../App';
import ExpenseFrom from './ExpenseForm';

export interface INewExpense {
  setExpenses: React.Dispatch<React.SetStateAction<IExpense[]>>;
}

export default function NewExpense({ setExpenses }: INewExpense): JSX.Element {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="new-expense">
      {isAdding ? (
        <ExpenseFrom setExpenses={setExpenses} setIsAdding={setIsAdding} />
      ) : (
        <button onClick={() => setIsAdding(true)} className="new-expense button">
          Add new expense
        </button>
      )}
    </div>
  );
}
