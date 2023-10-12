import React from 'react';
import SectionLayout from 'layouts/SectionLayout';
import styled from 'styled-components';
import { maxDeviceSize } from 'utils/deviceSize';
import { Button } from 'components/atoms/Button/Button';
import { colors } from 'utils/colors';
import I18n from 'services/translation/I18n';
import adResultImage from 'assets/images/adResult.png';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { BlurImage } from 'components/atoms/BlurImage/BlurImage';

const About = () => (
  <SectionLayout name="about" secondary="true">
    <StyledTitleContainer>
      <I18n trans="about" />
    </StyledTitleContainer>
    <StyledSectionWrapper>
      <StyledDescriptionWrapper>
        <StyledListContainer>
          <StyledListLitem>
            <I18n trans="about.description.content" />
          </StyledListLitem>
          <StyledListLitem>
            <I18n trans="about.description.phone" />
          </StyledListLitem>

          <StyledListLitem>
            <I18n trans="about.description.geneateButton" />
          </StyledListLitem>
        </StyledListContainer>
        <StyledOrderSubmitButton text="generate.ad" />
      </StyledDescriptionWrapper>
      <StyledArrowContainer>
        <AiOutlineArrowRight />
      </StyledArrowContainer>
      <StyledResultContainer>
        <I18n trans="about.description.finish" />
        <BlurImage
          src={adResultImage}
          alt="generated result"
          hash="LCRysgay-;j[RjWBt7ay~qofM{j["
          style={{ boxShadow: '8px 8px 24px 0px rgba(66, 68, 90, 1)' }}
        />
      </StyledResultContainer>
    </StyledSectionWrapper>
  </SectionLayout>
);

const StyledTitleContainer = styled.h2`
  color: ${colors.white};
`;

const StyledListContainer = styled.ol`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: ${colors.secondary};
  -webkit-box-shadow: 8px 8px 24px -13px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px -13px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px -13px rgba(66, 68, 90, 1);
  transition: all 0.3s ease-in-out;

  @media ${maxDeviceSize.tablet} {
    width: 80%;
    margin: auto;
  }
`;

const StyledOrderSubmitButton = styled(Button)`
  padding: 12px 20px;
  margin: 8px 0;
  background-color: ${colors.lightBlack};
  outline: none !important;
  border: 1px solid #ccc;
  color: white;
  font-size: 1rem;
  text-align: center;

  &:hover {
    color: ${colors.ternary};
  }
`;

const StyledSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: ${colors.white};

  @media ${maxDeviceSize.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const StyledResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-align: center;

  @media ${maxDeviceSize.tablet} {
    img {
      display: none;
    }
  }
`;

const StyledArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4rem;

  @media ${maxDeviceSize.tablet} {
    display: none;
  }
`;

const StyledListLitem = styled.li`
  padding-left: 16px;
  margin-top: 24px;
  position: relative;
  font-size: 18px;
  line-height: 20px;

  &:before {
    content: '';
    display: block;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    border: 2px solid #ddd;
    position: absolute;
    top: -8px;
    left: -30px;
  }
`;

const StyledDescriptionWrapper = styled.div`
  display: flex;

  @media ${maxDeviceSize.tablet} {
    display: block;
  }
`;

export default About;
