import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ size, bgcolor, color, children, handleClick }) => {
  return (
    <S.Button size={size} bgcolor={bgcolor} color={color} onClick={handleClick}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['lg', 'md']),
  bgcolor: PropTypes.oneOf(['red', 'green']),
  color: PropTypes.oneOf(['white', 'blue']),
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
