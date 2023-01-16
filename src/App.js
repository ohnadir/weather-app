import './App.css';
import Inputs from './components/Inputs';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="mx-auto max-w-screen-md py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700  h-fit shadow-xl shadow-gray-400">
      <Navbar/>
      <Inputs/>
    </div>
  );
}

export default App;
