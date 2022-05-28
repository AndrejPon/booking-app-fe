import styled from 'styled-components';

export const OrdersList = styled.div`
  column-gap: 1rem;
  display: grid;
  grid-template-rows: auto;
  margin: 1rem auto;
  max-width: 900px;
  row-gap: 1rem;
`;

export const ServiceName = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  width: 17rem;
  padding-right: 1rem;
`;

export const ServiceDuration = styled.p`
  width: 15rem;
`;

export const ServicePrice = styled.p`
  width: 10rem;
`;
