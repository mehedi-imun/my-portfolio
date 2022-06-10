import './App.css';
import { Routes, Route} from "react-router-dom";
import AboutMe from './components/pages/Home/About/AboutMe';
import Home from './components/pages/Home/Home';
function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about-me' element={<AboutMe/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
