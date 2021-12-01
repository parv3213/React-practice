import './ExpensesList.css';

import { IExpense } from '../../App';
import ExpenseItem from './ExpenseItem';

interface IExpenses {
  filteredExpenses: IExpense[];
}
export default function ExpensesList({ filteredExpenses }: IExpenses): JSX.Element {
  if (filteredExpenses.length === 0) {
    return <p className="expenses-list__fallback">No Expenses Found.</p>;
  }
  return (
    <ul className="expenses-list">
      {filteredExpenses.map(expense => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
}
