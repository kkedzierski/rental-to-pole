import React from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import I18n from 'services/translation/I18n';
import styled from 'styled-components';
import { Navbar } from 'components/organisms/Navbar/Navbar';

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <StyledTitle>
      <I18n trans="title" />
    </StyledTitle>
  </>
);

const StyledTitle = styled.h1`
  margin-top: 2rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 400;
`;

export default App;
