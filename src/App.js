import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FrontPage from './components/FrontPage/FrontPage';
import Nav from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';

import {useState} from "react";


function App() {

  // const [color, setColor] = useState("#38b2ac");
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`App ${theme}`}>
      <Nav setTheme={setTheme} theme={theme}/>
      <div id="top" className='container'>
        <FrontPage />
        <About />
        <Portfolio theme={theme}/>
        <Contact />
      </div>
      <Footer theme={theme}/>
    </div>
  );
}

export default App;
