import styled from 'styled-components';

export const ServicesList = styled.div`
  column-gap: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1rem auto;
  max-width: 900px;
  row-gap: 1rem;
`;

export const ServiceName = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  height: 2.5rem;
  text-align: center;
`;

export const ServiceDuration = styled.p``;

export const ServicePrice = styled.p``;

export const ServiceImage = styled.img`
  width: 100%;
`;
