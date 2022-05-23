import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';

const Header = ({ children }) => {
  return <S.Header>{children}</S.Header>;
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
