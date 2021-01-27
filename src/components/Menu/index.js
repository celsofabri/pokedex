import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMenu, StyledMenuList, StyledMenuItem } from './styled';

const Menu = () => {
  return (
    <StyledMenu>
      <StyledMenuList>
        <StyledMenuItem>
          <Link to="/">Home</Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/generations">Generations</Link>
        </StyledMenuItem>
      </StyledMenuList>
    </StyledMenu>
  );
};

export default Menu;
