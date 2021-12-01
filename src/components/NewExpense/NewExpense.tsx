import './NewExpense.css';

import { IExpense } from '../../App';
import ExpenseFrom from './ExpenseForm';

export interface INewExpense {
  setExpenses: React.Dispatch<React.SetStateAction<IExpense[]>>;
}

export default function NewExpense({ setExpenses }: INewExpense): JSX.Element {
  return (
    <div className="new-expense">
      <ExpenseFrom setExpenses={setExpenses} />
    </div>
  );
}
