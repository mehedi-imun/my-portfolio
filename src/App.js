import './App.css';
import About from './components/pages/Home/About/About';
import Banner from './components/pages/Home/Banner.js/Banner';
import Contact from './components/pages/Home/Contact/Contact';
import Experience from './components/pages/Home/Experience/Experience';
import Portfolio from './components/pages/Home/Portfolio/Portfolio';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
