import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import About from './About/About';
import Banner from './Banner.js/Banner';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Header></Header>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
        </div>
    );
};

export default Home;