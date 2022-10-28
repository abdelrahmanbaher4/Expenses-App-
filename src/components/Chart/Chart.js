import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const { datapoints } = props;
  const totalMax = Math.max(...datapoints.map((dataPoint) => dataPoint.value));
  return (
    <div className="chart">
      {datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
