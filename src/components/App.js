import React from 'react';
// import { GlobalStyle, PropsButton, ExtendedButton } from './styled';

// import HeaderStyled from './HeaderStyled';
import {Hero, Input, AnimatedBox} from './hero.style';

import desert from '../images/desert.jpeg';
import ocean from '../images/ocean.jpeg';

import Banner from './Banner';
import { MediaBanner } from './MediaQuery.style';

// theme provider component which uses context api from react
import  { ThemeProvider } from 'styled-components';

// import all our themes
import { redTheme, blueTheme, greenTheme } from './Themes.style';

import Navbar from './Navbar';

// global style needs to be place at the top of your React tree 
function App() {
  // return (
  //   <div>
  //     <GlobalStyle />
      
  //     <HeaderStyled title="Hello from App.js" />
      
  //     <PropsButton color='blue'>button one</PropsButton>
  //     <PropsButton color='pink'>button two</PropsButton>
  //     <PropsButton>button three</PropsButton>

  //     <ExtendedButton>extended button</ExtendedButton>
  //   </div>
  // );

  // return (
  //   <div>
  //     <GlobalStyle />
  //     <Hero image={desert}>
  //       <Banner title="this is my title">
  //         <ExtendedButton>Click me</ExtendedButton>
  //         <Input />
  //         <AnimatedBox />
  //       </Banner>
  //     </Hero>
  //     <Hero image={ocean}></Hero>
  //     <Hero full/>
  //   </div>
  // );

  // using ThemeProvider component which must return at least one element
  // must need to have theme prop
  // return (
  //   <ThemeProvider theme={blueTheme}>
  //     <main>
  //       <Navbar />
  //     </main>
  //   </ThemeProvider>
  // );

  // media queries
  return (
    <div>
      <MediaBanner>
        <h1>Media queries</h1>
      </MediaBanner>
    </div>
  );
}

export default App;
