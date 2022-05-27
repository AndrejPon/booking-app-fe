import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Order.style';

const Order = ({ children }) => {
  return <S.Order>{children}</S.Order>;
};

Order.propTypes = {
  children: PropTypes.node,
};

export default Order;
