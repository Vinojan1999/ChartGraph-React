import './App.css';
import ApexChart from './components/ApexChart';
import LineChart from './components/LineChart';
import MousePosition from './components/MousePosition';
// import { Data } from './Data';

function App() {
  return (
    <div className="App">
      <div className='app__chart'>
        <LineChart />
        <ApexChart />
        <MousePosition />
      </div>
    </div>
  );
}


export default App;
