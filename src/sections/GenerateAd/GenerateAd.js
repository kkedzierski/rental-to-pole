import React from 'react';
import SectionLayout from 'layouts/SectionLayout';
import styled from 'styled-components';
import { maxDeviceSize } from 'utils/deviceSize';
import { Button } from 'components/atoms/Button/Button';
import { colors } from 'utils/colors';
import I18n from 'services/translation/I18n';
import adResult from 'assets/images/adResult.png';
import { BlurImage } from 'components/atoms/BlurImage/BlurImage';

const GenerateAd = () => (
  <SectionLayout name="generateAd">
    <StyledTitleContainer>
      <I18n trans="generate.ad" />
    </StyledTitleContainer>
    <StyledSectionWrapper>
      <StyledFormContainer>
        <StyledOrderSectionWrapper>
          <StyledOrderForm id="email-form" method="POST">
            <StyledLabel htmlFor="ad-content">
              <I18n trans="ad.content" />
            </StyledLabel>
            <StyledOrderTextArea
              id="ad-content"
              name="ad-content"
              rows="4"
              cols="70"
              maxLength="200"
              type="textarea"
            />
            <StyledLabel htmlFor="phoneNumber">
              <I18n trans="ad.phone" />
            </StyledLabel>
            <StyledOrderInput
              type="number"
              id="phoneNumber"
              required
              name="phoneNumber"
              min="100"
            />
            <StyledOrderSubmitButton type="submit" text="generate.ad" />
          </StyledOrderForm>
        </StyledOrderSectionWrapper>
      </StyledFormContainer>
      <StyledOrderDescribe>balbalabl</StyledOrderDescribe>
      <StyledResultContainer>
        <I18n trans="about.description.finish" />
        <BlurImage src={adResult} alt="generated result" hash="LCRysgay-;j[RjWBt7ay~qofM{j[" />
      </StyledResultContainer>
    </StyledSectionWrapper>
  </SectionLayout>
);

const StyledTitleContainer = styled.h2`
  color: ${colors.white};
`;

const StyledLabel = styled.label`
  color: ${colors.white};
`;

const StyledFormContainer = styled.div`
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

const StyledOrderSectionWrapper = styled.div`
  display: flex;
  align-self: center;
  align-items: center;

  @media ${maxDeviceSize.tablet} {
    display: block;
  }
`;

const StyledOrderForm = styled.form`
  padding: 3rem;
  display: flex;
  flex-direction: column;

  @media ${maxDeviceSize.tablet} {
    padding: 1rem 0 !important;
  }
`;

const StyledOrderInput = styled.input`
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;

  &:focus {
    outline: none !important;
    border: 2px solid ${colors.primary};
    box-shadow: 0 0 10px ${colors.primary};
  }
`;

const StyledOrderTextArea = styled.textarea`
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  resize: none;

  &:focus {
    outline: none !important;
    border: 2px solid ${colors.primary};
    box-shadow: 0 0 10px #719ece;
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
  justify-items: center;
  color: ${colors.white};
`;

const StyledResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const StyledOrderDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default GenerateAd;
