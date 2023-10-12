import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'utils/colors';

const Ad = ({ ref, content, phone }) => (
  <StyledPdfContainer ref={ref}>
    <StyledAdContentContainer>{content}</StyledAdContentContainer>
    <StyledAdPhoneContainer>{phone}</StyledAdPhoneContainer>
  </StyledPdfContainer>
);

Ad.propTypes = {
  ref: PropTypes.element.isRequired,
  content: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

const StyledPdfContainer = styled.div`
  border: 1px solid ${colors.black};
  padding: 2rem;
  width: 842px;
  height: 595px;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

const StyledAdContentContainer = styled.div`
  font-size: 3rem;
`;

const StyledAdPhoneContainer = styled.div`
  transform: rotate(-90deg);
  width: 30px;
  margin-top: 16rem;
`;

export default Ad;
