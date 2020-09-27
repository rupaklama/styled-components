import React from 'react';
import styled from 'styled-components';
const HeaderStyled = ({ title }) => {
  return (
    <StyledWrapper>
      <h1>{title}</h1>
      <h2 className="random">another heading</h2>
    </StyledWrapper>
  );
};

// nesting selectors
const StyledWrapper = styled.section`
  background: red;
  width: 20%;
  margin: 1rem;
  transition: 2s ease-in-out;

  h1 {
    color: blue;
  }
  .random {
    color:green;
  }
  &:hover {
    background: lightblue;
  }
`;

export default HeaderStyled;
