import React, { useRef, useState, useEffect } from 'react';
import GlobalStyle from './Style';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { changeTabColor } from '../utils/client/helperFunctions';


const App = () => {
  const [stateSection, setStateSection] = useState('home');
  const sections = {
    home: useRef(),
    about: useRef(),
    contact: useRef()
  }

  useEffect(() => {
    changeTabColor(sections, (section) =>
      setStateSection(section)
    );
  }, []);

  return (
    <>
      <GlobalStyle />
      <NavBar sections={sections} stateSection={stateSection} />

      <section>
        <Home innerRef={sections.home} />
        <About innerRef={sections.about} />
        <Contact innerRef={sections.contact} />
      </section>
    </>
  );
}

export default App;
