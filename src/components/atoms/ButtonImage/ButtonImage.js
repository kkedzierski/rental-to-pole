import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const ButtonImage = ({ onClick, image, alt, style }) => (
  <StyledButton role="button" type="button" onClick={onClick} style={style}>
    <StyledImage src={image} alt={alt} />
  </StyledButton>
);

ButtonImage.propTypes = {
  onClick: PropTypes.element.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.element,
};

ButtonImage.defaultProps = {
  style: {},
};

const StyledButton = styled.button`
  align-self: center;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: 0.75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;

const StyledImage = styled.img`
  width: 30px;
`;
