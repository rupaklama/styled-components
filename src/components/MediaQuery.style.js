import styled from 'styled-components';

export const MediaBanner = styled.div`
  background: red;
  h1 {
    color: white;
    text-transform: uppercase;
  }
  @media (max-width:992px) {
    background: blue;
    h1 {
      color: yellow;
    }
  }
`;