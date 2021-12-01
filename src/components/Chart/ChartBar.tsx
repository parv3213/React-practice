import './ChartBar.css';

interface IChartBar {
  value: number;
  maxValue: number;
  label: string;
}
export default function ChartBar({ value, maxValue, label }: IChartBar): JSX.Element {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
    // eslint-disable-next-line
    console.log(barFillHeight);
  }

  return (
    <div className="chat-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}
