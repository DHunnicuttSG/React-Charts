import './App.css';
import BarChart from './Charts/BarChart';
import BarChartAPI from './Charts/BarChartAPI';
import Line from './Charts/Line';
import PieChart from './Charts/Pie';

function App() {
  return (
    <div className="App">
      <BarChart />
      <BarChartAPI />
      <Line/>
      <PieChart/>
    </div>
  );
}

export default App;
