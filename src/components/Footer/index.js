import React from 'react';
import { StyledWrapper } from 'assets/global/styled';
import { StyledFooter } from './styled';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <p>
          Pokédex developed by{' '}
          <a
            href="https://celsofabri.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Celso Fabri
          </a>
        </p>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
