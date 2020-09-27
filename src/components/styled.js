import styled, {createGlobalStyle, css} from 'styled-components';
// css - css helper 

// Styled component will create unique class - <div class="sc-bdnylx eFtECD">
// for that particular styled element,
// this is why style will not be share across the global scope which
// prevent issues

// styled object from styled-components library comes with bunch of properties 
// that we can access, which all relates to any valid html5 elements

// So, styled component is a function that expects any valid CSS as a string
// `${}` - String interpolation can also be use to create different variants of styled component
// like conditional rendering with props passed on the element
// String interpolation is replacing placeholders with values in a string literal. 
// The string interpolation in JavaScript is performed by template literals (strings wrapped in backticks ` ) 
// and ${expression} as a placeholder.

// We can use nested statements like in SASS.
// The '&' comes in handy when you’re nesting and you want to create a more specific selector. 
// .parent .child {}
// The '&' always refers to the parent selector when nesting. 
export const Button = styled.button`
  color: white;
  background: ${props => props.secondary ? 'black' : '#f8049c'};
  font-weight: bold;

  ${props => props.large ? css`
    padding: 10px;
    border-radius: 5px;
    font-size: 1.5em;
  ` : css`
    padding: 8px;
    border-radius: 4px;
    font-size: 1em;
  `}

  box-shadow: none;
  font-size: 1em;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eeee;
    color: #666;
  }
`;

// basic variables
const color = 'yellow';

// In CSS rem stands for “root em”, 1 rem == 16px
// rem is a multiplier based on html default font size - 16px 
// (which for most browsers has a default value of 16px).

// NOTE: px is an absolute unit/value, always going to be same
// don't change it's font size at all
// even if user wants to make font-size bigger in the browser
// where as 'rem' adjust it's font size value

// rem - relative font measurement, always multiplies relative to 
// the root element's font size like body element

// em - relative font measurement, always multiplies against the parent element,
// if you want child element to change according to the parent element

// % - is relative measurement based on its parent's size

// vh - viewport height, This unit is based on the height of the viewport. 
// A value of 1vh is equal to 1% of the viewport/window height. 

// 100vh takes 100% of viewport/window
// viewport unit don't depend of their parent's size of html elements like div
// viewport only cares about window object like screen size

// vw - This unit is based on the width of the viewport. 
// A value of 1vw is equal to 1% of the viewport/window width.

// advanced variables
const padding = 'padding:1rem'; // storing property as well as value
const margin = 'margin:1rem';

// function with default param
const border = (width='5px') => {
  return `border:solid ${width} red`
}

// --primaryColor: css variable in index.css
export const ButtonTwo = styled.button`
  ${padding};
  ${margin};
  ${border('10px')};
  color: ${color};
  background: var(--primaryColor);
  text-transform: uppercase;
`;

// adding global styles like for all body tags in all the components
export const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    box-sizing: border-box;
  }
`;

// apply props value in button
export const PropsButton = styled.button`
  background: ${props => props.color ? props.color : 'green' };
  color: white;
  padding: 1rem;
  margin: 1rem;
  font-size: 1rem;
  
`;

// extending styled component
export const ExtendedButton = styled(PropsButton)`
  margin: 0.5rem;
  text-transform: capitalize;
  font-size: 1rem;
`;

// Styled-Components are part of CSS-in-JS movement where we can create components that possess their 
// own encapsulated styles.  
// What makes Styled-Components so cool is their awesome tagged template syntax that 
// allows to create normal react components by only defining styles. With zero configuration 
// styled-components support css modularity - no css collisions, variables in css, nesting in css, 
// extending components styles and many more. Styled Components also allows us to  
// write plain CSS in your components without worrying about class name collisions.