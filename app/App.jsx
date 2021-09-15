import React, { useRef, useState, useEffect } from 'react';
import { changeTabColor } from '../utils/client/helperFunctions';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyle from './asset/styles/app/App';
import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => {
  const [stateSection, setStateSection] = useState('home');
  const sections = {
    home: useRef(),
    about: useRef(),
    contacts: useRef()
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
        <Contact innerRef={sections.contacts} />
      </section>
    </>
  );
}

export default App;
