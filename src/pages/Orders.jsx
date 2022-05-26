import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';

const Orders = () => {
  return (
    <>
      <Header>
        {' '}
        <Link to='/' className='home-link'>
          VK Studija
        </Link>
      </Header>
    </>
  );
};

export default Orders;
