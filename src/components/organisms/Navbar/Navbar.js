import React, { useState } from 'react';
import penguinLogo from 'assets/images/penguin_icon.png';
import styled from 'styled-components';
import { ButtonImage } from 'components/atoms/ButtonImage/ButtonImage';
import enFlagImage from 'assets/images/uk-flag.png';
import plFlagImage from 'assets/images/pl-flag.png';

import i18next from 'i18next';

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeLanguage = () => {
    i18next.changeLanguage(i18next.language === 'en' ? 'pl' : 'en');
    setToggle(!toggle);
  };
  return (
    <StyledNav>
      <StyledLogo src={penguinLogo} alt="Penguin logo" />
      <ButtonImage
        onClick={handleChangeLanguage}
        image={toggle ? plFlagImage : enFlagImage}
        alt="flag to change language"
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          marginTop: '1rem',
          marginRight: '1rem',
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
  height: 6rem;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(59, 70, 82, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(59, 70, 82, 1);
  box-shadow: 8px 8px 24px 0px rgba(59, 70, 82, 1);
`;

const StyledLogo = styled.img`
  width: 50px;
`;
