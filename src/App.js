
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes, // for server rendering
  Route
  // etc.
} from "react-router-dom";
import Hero from './components/Hero';
function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
    </Routes>
    
    </Router>
    </div>
  );
}

export default App;
