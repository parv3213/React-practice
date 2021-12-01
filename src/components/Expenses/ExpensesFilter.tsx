import './ExpensesFilter.css';

interface IExpenseFilter {
  filterYear: string;
  setFilterYear: React.Dispatch<React.SetStateAction<string>>;
}
export default function ExpensesFilter({ filterYear, setFilterYear }: IExpenseFilter): JSX.Element {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={filterYear} onChange={e => setFilterYear(e.target.value)}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
