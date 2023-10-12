import React from 'react';
import { styled } from 'styled-components';
import { colors } from 'utils/colors';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

export const Footer = () => (
  <StyledFooterWrapper>
    <StyledFooterContainer>
      <StyledCopyrightContainer>
        <StyledCopySection>
          <StyledCopyDescription>
            Copyright
            <AiOutlineCopyrightCircle />
            2023. - Asy rękawów
          </StyledCopyDescription>
        </StyledCopySection>
      </StyledCopyrightContainer>
    </StyledFooterContainer>
  </StyledFooterWrapper>
);

const StyledFooterWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-around;
  background-color: ${colors.secondary};
`;

const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCopyrightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: #b5b8b8 1px solid;
`;

const StyledCopyDescription = styled.p`
  color: ${colors.white};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCopySection = styled.div`
  margin-top: 1rem;
  color: ${colors.white};
`;
