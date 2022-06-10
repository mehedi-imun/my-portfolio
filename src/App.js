import './App.css';
import { Routes, Route} from "react-router-dom";
import AboutMe from './components/pages/Home/About/AboutMe';
import Home from './components/pages/Home/Home';
import Blog from './components/pages/Home/About/Blog';
import PortfolioDetails from './components/pages/Home/Portfolio/PortfolioDetails';
function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about-me' element={<AboutMe/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/project/:id' element={<PortfolioDetails/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
