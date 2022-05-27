import styled from 'styled-components';

export const OrdersList = styled.div`
  max-width: 900px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
`;

export const ServiceName = styled.h3`
  text-align: center;
  height: 2.5rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ServiceDuration = styled.p``;

export const ServicePrice = styled.p``;

export const ServiceImage = styled.img`
  width: 100%;
`;
