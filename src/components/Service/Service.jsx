import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Service.style';

const Service = ({ children }) => {
  return <S.Service>{children}</S.Service>;
};

Service.propTypes = {
  children: PropTypes.node,
};

export default Service;
