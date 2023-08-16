import { useEffect } from 'react';
import Aos from "aos"

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
