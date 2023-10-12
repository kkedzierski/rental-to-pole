import { ButtonLink } from 'components/atoms/ButtonLink/ButtonLink';
import React from 'react';
import styled from 'styled-components';
import HappyPenguinImage from 'assets/images/happy penguin.png';
import SectionLayout from 'layouts/SectionLayout';
import { maxDeviceSize } from 'utils/deviceSize';
import { BlurImage } from 'components/atoms/BlurImage/BlurImage';

const Hero = () => (
  <SectionLayout>
    <StyledHeroContainer>
      <StyledHeroWrapper>
        <StyledDescriptionContainer>
          <BlurImage
            src={HappyPenguinImage}
            alt="happy penguin"
            hash="LFJuWU^h005TBtR;^dxV00IW~o?Y"
          />
        </StyledDescriptionContainer>
        <StyledButtonLinksContainer>
          <ButtonLink text="about" to="about" />
          <ButtonLink text="start" to="generateAd" />
        </StyledButtonLinksContainer>
      </StyledHeroWrapper>
    </StyledHeroContainer>
  </SectionLayout>
);

const StyledHeroContainer = styled.div``;

const StyledButtonLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media ${maxDeviceSize.phone} {
    display: flex;
    flex-direction: column;
  }
`;
const StyledDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media ${maxDeviceSize.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export default Hero;
