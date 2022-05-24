import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ServicesList.style';
import Service from '../Service/Service';

const ServicesList = ({ services, handleClick }) => {
  return (
    <S.ServicesList>
      {services &&
        services.map((service) => (
          <Service key={service.id} handleClick={() => handleClick(service.id)}>
            {service.name}
            {service.duration}
            {service.price}
          </Service>
        ))}
    </S.ServicesList>
  );
};

ServicesList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      duration: PropTypes.node.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ServicesList;
