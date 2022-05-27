import React from 'react';
import PropTypes from 'prop-types';
import * as S from './OrdersList.style';
import Order from '../Order/Order';
import Button from '../Button/Button';

const OrdersList = ({ orders, handleClick }) => {
  return (
    <S.OrdersList>
      {orders &&
        orders.map((order) => (
          <Order key={order.id} handleClick={() => handleClick(order.id)}>
            <S.ServiceName>{`${order.service_name}`}</S.ServiceName>
            <S.ServiceDuration>{`Trukmė: ${order.service_duration}`}</S.ServiceDuration>
            <S.ServicePrice>{`Kaina: ${order.service_price}.00€`}</S.ServicePrice>
            <Button handleClick={() => handleClick(order.id)}>Atšaukti</Button>
          </Order>
        ))}
    </S.OrdersList>
  );
};

OrdersList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      service_name: PropTypes.string.isRequired,
      service_duration: PropTypes.node.isRequired,
      service_price: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default OrdersList;
