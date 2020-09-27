import React from 'react';
import styled from 'styled-components';

const Navbar = ({ children }) => {
  return (
    <NavWrapper>
      <h2>Company name</h2>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background: ${props => props.theme.primaryColor};
  ${props => `color:${props.theme.secondaryColor}`};
`;

export default Navbar;
