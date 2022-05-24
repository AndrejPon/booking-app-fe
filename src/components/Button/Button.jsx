import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children, handleClick }) => {
  return <S.Button onClick={handleClick}>{children}</S.Button>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
