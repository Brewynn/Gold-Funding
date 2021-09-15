import React from 'react';
import Container from '../../asset/styles/components/NavBar';
import Tabs from './Tabs';

const NavBar = ({ sections, stateSection }) => (
  <Container stateSection={stateSection}>
    <div className="nav">
      <picture className="nav__picture">
        <img
          className="nav__logo"
          src="../../asset/images/logo.png"
          alt="Logo"
        />
      </picture>

      <Tabs sections={sections} />
    </div>
  </Container>
);
 
export default NavBar;
