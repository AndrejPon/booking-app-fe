import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import ServicesList from '../components/ServicesList/ServicesList';

const getData = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/v1/services`, {
      headers: {
        authorization: `Bearer: ${localStorage.getItem('token')}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

const Home = () => {
  const [data, setData] = useState([]);
  const [newOrder, setNewOrder] = useState('');
  const navigate = useNavigate();

  useEffect(
    () => async () => {
      setData(await getData());
    },
    []
  );

  const addOrder = async (event) => {
    // console.log('addOrder ===', addOrder);
    event.preventDefault();
    // setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/v1/orders`, {
        method: 'POST',
        headers: {
          authorization: `Bearer: ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newOrder }),
      });
      const data = await res.json();

      // setReload(!reload);
      setNewOrder('');
      navigate('/orders');
      alert(data.msg || data.err || 'Unknown error');
    } catch (error) {
      alert(error.message || 'Unexpected error');
    }
  };

  return (
    <>
      <Header>
        <Link to='/' className='home-link'>
          VK Studija
        </Link>
      </Header>
      {data.length > 0 && (
        <ServicesList services={data} handleClick={addOrder} />
      )}
    </>
  );
};

export default Home;
