import React from 'react';
import Container from '../../asset/styles/components/Footer';

const Footer = () => (
  <Container>
    <div className="footer">
      <p className="footer__text">
        Golden Funding - copyright © {new Date().getFullYear()}
      </p>
    </div>
  </Container>
);

export default Footer;
