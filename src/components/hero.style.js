import styled, { keyframes } from 'styled-components';

// set up default image
import himalaya from '../images/himalaya.jpeg';

// The Hero component has image for background with title, text and single Call to Action (CTA) button. 
// hero image is a large web banner image, prominently placed on a web page, generally in the front and center.
export const Hero = styled.div`
  min-height: ${props => props.full ? '100vh' : '50vh' };
  background-image: url(${props => props.image ? props.image : himalaya });
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// setting input element separately 
// input element's attributes method - attrs()
// for type, name, value etc
export const Input = styled.input.attrs(props => ({
  type: 'text',
  placeholder: 'Search pictures'
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`;

// animations
// store animations in a variable to access it
// this can be exported & use in other box components using with CSS helper function
// not using with CSS helper might not work
const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  50% {
    transform: rotate(360deg)
  }
  100% {
    transform: rotate(-360deg)
  }
`;

export const AnimatedBox = styled.div`
  margin: 3rem;
  width: 9rem;
  height: 9rem;
  border: 3px solid blue;
  animation: ${rotate} 3s ease-in-out infinite;
`;
