import React, { useState } from 'react';
// import penguinLogo from 'assets/images/penguin_icon.png';
import styled from 'styled-components';
import { ButtonImage } from 'components/atoms/ButtonImage/ButtonImage';
import enFlagImage from 'assets/images/uk-flag.png';
import plFlagImage from 'assets/images/pl-flag.png';

import i18next from 'i18next';
import { colors } from 'utils/colors';
import I18n from 'services/translation/I18n';
import { maxDeviceSize } from 'utils/deviceSize';

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeLanguage = () => {
    i18next.changeLanguage(i18next.language === 'en' ? 'pl' : 'en');
    setToggle(!toggle);
  };
  return (
    <StyledNav>
      <StyledTitle>
        <I18n trans="title" />
      </StyledTitle>
      <ButtonImage
        onClick={handleChangeLanguage}
        image={toggle ? plFlagImage : enFlagImage}
        alt="flag to change language"
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          marginTop: '2rem',
          marginRight: '2rem',
        }}
      />
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 8rem;
  background-color: ${colors.secondary};
  color: ${colors.white};
`;

const StyledTitle = styled.h1`
  margin-top: 2rem;
  margin-bottom: 3rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 400;

  @media ${maxDeviceSize.tablet} {
    font-size: 2rem;
  }

  @media ${maxDeviceSize.phone} {
    font-size: 1.5rem;
  }
`;
