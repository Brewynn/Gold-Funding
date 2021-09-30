import React, {useRef, Suspense, lazy, useState} from 'react';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const GlobalStyle = lazy(() => import('./Styles'));
const Home = lazy(() => import('./components/Home'));
const NavBar = lazy(() => import('./components/NavBar'));

const renderLoader = () => (
  <span>Loading</span>
);

const App = () => {
  const [sections] = useState({
    home: useRef({}),
    about: useRef({}),
    contacts: useRef({}),
  });

  return (
    <Suspense fallback={renderLoader}>
      <GlobalStyle />
      <NavBar sections={sections} />

      <section>
        <Home innerRef={sections.home} />
        <About innerRef={sections.about} />
        <Contact innerRef={sections.contacts} />
        <Footer />
      </section>
    </Suspense>
  );
};

export default App;
