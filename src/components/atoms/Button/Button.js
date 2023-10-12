import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import I18n from 'services/translation/I18n';

export const Button = ({ text, onClick }) => (
  <StyledButton onClick={onClick} role="button" type="button">
    <I18n text={text} trans={text} />
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.element,
};

Button.defaultProps = {
  onClick: {},
};

const StyledButton = styled.button`
  align-self: center;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-size: 2rem;
  line-height: 23px;
  outline: none;
  padding: 0.75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  padding: 4rem;
  margin: 1rem;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;
