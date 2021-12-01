import './Chart.css';

import ChartBar from './ChartBar';

interface IChart {
  dataPoints: {
    label: string;
    value: number;
  }[];
}

export default function Chart({ dataPoints }: IChart): JSX.Element {
  const totalMaximum = Math.max(...dataPoints.map(dataPoint => dataPoint.value));

  return (
    <div className="chart">
      {dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
