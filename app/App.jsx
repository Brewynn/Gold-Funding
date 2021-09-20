import React, {useRef} from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyle from './asset/styles/app/App';
import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => {
  const sections = {
    home: useRef(),
    about: useRef(),
    contacts: useRef(),
  };

  return (
    <>
      <GlobalStyle />
      <NavBar sections={sections} />

      <section>
        <Home innerRef={sections.home} />
        <About innerRef={sections.about} />
        <Contact innerRef={sections.contacts} />
        <Footer />
      </section>
    </>
  );
};

export default App;
