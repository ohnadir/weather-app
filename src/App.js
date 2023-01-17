import './App.css';
import DateAndLocation from './components/DateAndLocation';
import Inputs from './components/Inputs';
import Navbar from './components/Navbar';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import getFormattedWeatherData from './service';


function App() {
  const fetchWeaterData = async()=>{
    const data = await getFormattedWeatherData({ q: "london"})
    console.log(data)
  }
  fetchWeaterData();
  return (
    <div className="mx-auto max-w-screen-md py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700  h-fit shadow-xl shadow-gray-400">
      <Navbar/>
      <Inputs/>
      <DateAndLocation/>
      <TemperatureAndDetails/>
    </div>
  );
}

export default App;
