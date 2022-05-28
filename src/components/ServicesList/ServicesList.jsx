import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './ServicesList.style';
import Service from '../Service/Service';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';

const ServicesList = ({ services, handleClick }) => {
  const [userDetails, setUserDetails] = useState();
  return (
    <S.ServicesList>
      {services &&
        services.map((service) => (
          <Service key={service.id} handleClick={() => handleClick(service.id)}>
            <S.ServiceName>{`${service.name}`}</S.ServiceName>
            <S.ServiceImage src={service.image} alt='Image' />
            <S.ServiceDuration>{`Trukmė: ${service.duration}`}</S.ServiceDuration>
            <S.ServicePrice>{`Kaina: ${service.price}.00€`}</S.ServicePrice>
            <InputField
              name='date'
              placeholder='Data'
              label=''
              type='date'
              handleChange={(value) =>
                setUserDetails({ ...userDetails, date: value })
              }
            ></InputField>
            <Button
              size='lg'
              color='blue'
              bgcolor='green'
              handleClick={() => handleClick(service.id)}
            >
              Užsakyti
            </Button>
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
