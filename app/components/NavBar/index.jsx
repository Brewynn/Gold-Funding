import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Container from './Styles';
import Tabs from './Tabs';

const NavBar = ({sections}) => {
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

        <Tabs
          sections={sections}
          setStateSection={setStateSection}
        />
      </div>
    </Container>
  );
};

NavBar.propTypes = {
  sections: PropTypes.object.isRequired,
};

export default NavBar;
