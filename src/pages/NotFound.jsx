import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container/Container';

const NotFound = () => {
  return (
    <Container>
      Puslapis nearastas. &nbsp;<Link to='/'>Atgal</Link>
    </Container>
  );
};

export default NotFound;
