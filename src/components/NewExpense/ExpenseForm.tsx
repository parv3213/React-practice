import './ExpenseForm.css';

import { useState } from 'react';

import { IExpense } from '../../App';
import { INewExpense } from './NewExpense';

interface ExpenseForm extends INewExpense {
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ExpenseFrom({ setExpenses, setIsAdding }: ExpenseForm): JSX.Element {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const handleTitleChange = (value: string) => {
    setUserInput(prevState => {
      return { ...prevState, title: value };
    });
  };
  const handleAmountChange = (value: string) => {
    setUserInput(prevState => {
      return { ...prevState, amount: value };
    });
  };
  const handleDateChange = (value: string) => {
    setUserInput(prevState => {
      return { ...prevState, date: value };
    });
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const expenseData: IExpense = {
      ...userInput,
      amount: +userInput.amount,
      date: new Date(userInput.date),
      id: String(Math.random()),
    };
    setExpenses((prevState: IExpense[]) => {
      return [expenseData, ...prevState];
    });
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
    setIsAdding(false);
  };

  const cancelHandler = () => {
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
    setIsAdding(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.title}
            onChange={e => handleTitleChange(e.target.value)}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.amount}
            onChange={e => handleAmountChange(e.target.value)}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.date}
            onChange={e => handleDateChange(e.target.value)}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
