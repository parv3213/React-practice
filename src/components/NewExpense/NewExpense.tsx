import './NewExpense.css';

import ExpenseFrom from './ExpenseForm';

export interface INewExpense {
  // eslint-disable-next-line
  setExpenses: any;
}

export default function NewExpense({ setExpenses }: INewExpense): JSX.Element {
  return (
    <div className="new-expense">
      <ExpenseFrom setExpenses={setExpenses} />
    </div>
  );
}
