import React from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Navbar } from 'components/organisms/Navbar/Navbar';
import { Footer } from 'components/organisms/Footer/Footer';
import Hero from 'sections/Hero/Hero';
import About from 'sections/About/About';
import GenerateAd from 'sections/GenerateAd/GenerateAd';

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Hero />
    <About />
    <GenerateAd />
    <Footer />
  </>
);

export default App;
