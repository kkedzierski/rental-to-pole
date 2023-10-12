import React, { useRef, useState } from 'react';
import SectionLayout from 'layouts/SectionLayout';
import styled from 'styled-components';
import { maxDeviceSize } from 'utils/deviceSize';
import { Button } from 'components/atoms/Button/Button';
import { colors } from 'utils/colors';
import I18n from 'services/translation/I18n';
import generatePDF, { Margin } from 'react-to-pdf';

const GenerateAd = () => {
  const [adContent, setAdContent] = useState('');
  const [adPhone, setAdPhone] = useState('');
  const [preview, setPreview] = useState(false);
  const targetRef = useRef();

  const handlePdfData = () => {
    const options = {
      filename: 'ad.pdf',
      method: 'save',
      page: {
        margin: Margin.SMALL,
        format: 'A4',
        orientation: 'landscape',
      },
    };
    setPreview(true);
    generatePDF(targetRef, options);
    setPreview(false);
  };

  return (
    <SectionLayout name="generateAd">
      <StyledTitleContainer>
        <I18n trans="generate.ad" />
      </StyledTitleContainer>
      <StyledFormContainer onSubmit={handlePdfData}>
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
              value={adContent}
              onChange={(event) => setAdContent(event.target.value)}
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
              value={adPhone}
              onChange={(event) => setAdPhone(event.target.value)}
            />
            <StyledOrderSubmitButton onClick={() => handlePdfData()} text="generate.ad" />
          </StyledOrderForm>
        </StyledOrderSectionWrapper>
      </StyledFormContainer>
      <StyledPdfWrapper>
        <I18n trans="Podgląd wydruku" />
        <StyledPdfContainer ref={targetRef} preview={preview}>
          <StyledAdContentContainer>{adContent}</StyledAdContentContainer>
          <StyledAdPhonesContainer>
            <StyledAdPhoneContainer>{adPhone}</StyledAdPhoneContainer>
            <StyledAdPhoneContainer>{adPhone}</StyledAdPhoneContainer>
            <StyledAdPhoneContainer>{adPhone}</StyledAdPhoneContainer>
            <StyledAdPhoneContainer>{adPhone}</StyledAdPhoneContainer>
            <StyledAdPhoneContainer>{adPhone}</StyledAdPhoneContainer>
            <StyledAdPhoneContainer>{adPhone}</StyledAdPhoneContainer>
            <StyledAdPhoneContainer>{adPhone}</StyledAdPhoneContainer>
          </StyledAdPhonesContainer>
        </StyledPdfContainer>
      </StyledPdfWrapper>
    </SectionLayout>
  );
};

const StyledTitleContainer = styled.h2`
  color: ${colors.black};
`;

const StyledLabel = styled.label`
  color: ${colors.black};
`;

const StyledFormContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin-top: 2rem;
  -webkit-box-shadow: 8px 8px 24px -13px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px -13px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px -13px rgba(66, 68, 90, 1);

  @media ${maxDeviceSize.tablet} {
    width: 80%;
    margin: auto;
  }
`;

const StyledOrderSectionWrapper = styled.div`
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
  white-space: pre-line;
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

const StyledPdfWrapper = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
`;

const StyledPdfContainer = styled.div`
  margin-top: 1rem;
  padding: 4rem;
  -webkit-box-shadow: 8px 8px 24px -13px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px -13px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px -13px rgba(66, 68, 90, 1);
  text-align: center;
`;

const StyledAdContentContainer = styled.div`
  font-size: 7rem;
  font-weight: bold;
`;

const StyledAdPhoneContainer = styled.div`
  transform: rotate(90deg);
  display: block;
  margin-top: 5rem;
  border: 1px dashed black;
  font-size: 2rem;
  padding: 1rem;
`;

const StyledAdPhonesContainer = styled.div`
  display: flex;
`;

export default GenerateAd;
