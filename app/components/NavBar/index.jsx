import React, { useState } from 'react';
import Container from '../../asset/styles/components/NavBar';
import Tabs from './Tabs';

const NavBar = ({ sections }) => {
  const [stateSection, setStateSection] = useState('home');

  return (
    <Container stateSection={stateSection}>
      <div className="nav">
        <picture className="nav__picture">
          <img
            className="nav__logo"
            src="../../asset/images/logo.png"
            alt="Logo"
          />
        </picture>

        <Tabs sections={sections} setStateSection={setStateSection} />
      </div>
    </Container>
  );
}
 
export default NavBar;
