import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from 'context';
import links from './constants';
import { StyledMenu, StyledMenuList, StyledMenuItem } from './styled';

const Menu = () => {
  const { setState } = useContext(Context);
  const location = useLocation();
  const pathname = location?.pathname;

  return (
    <StyledMenu>
      <StyledMenuList>
        {links.map((link, index) => {
          const { label, url } = link;

          return (
            <StyledMenuItem key={index}>
              <Link
                to={url}
                onClick={() => {
                  setState((prevState) => ({
                    ...prevState,
                    isLoading: pathname === url ? false : true
                  }));
                }}
              >
                {label}
              </Link>
            </StyledMenuItem>
          );
        })}
      </StyledMenuList>
    </StyledMenu>
  );
};

export default Menu;
