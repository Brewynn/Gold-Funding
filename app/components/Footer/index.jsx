import React from 'react';
import Container from './Styles';

const Footer = () => (
  <Container>
    <div className="footer">
      <p className="footer__text">
        Golden Funding - copyright © 2020 - {new Date().getFullYear()}
      </p>
    </div>
  </Container>
);

export default Footer;
