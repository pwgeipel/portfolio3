import { useEffect } from 'react';
import Aos from "aos"

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
