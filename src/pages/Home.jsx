import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import ServicesList from '../components/ServicesList/ServicesList';
import 'react-toastify/dist/ReactToastify.min.css';

const Home = () => {
  const [data, setData] = useState([]);
  console.log('UseStatedata ===', data);
  const [newOrder, setNewOrder] = useState('');
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/v1/services`);
      const data = await res.json();
      console.log('data ===', data);
      setData(data);

      return data;
    } catch (error) {
      return error;
    }
  };

  useEffect(
    () => async () => {
      getData();
    },
    []
  );
  console.log('useEffect===', useEffect);

  const addOrder = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/orders/${id}`,
        {
          method: 'POST',
          headers: {
            authorization: `Bearer: ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newOrder }),
        }
      );
      const data = await res.json();

      setNewOrder('');
      navigate('/orders');

      alert(
        data.msg ||
          'Norėdami testi, prisijunkite' ||
          data.error ||
          'Unknown error'
      );
    } catch (error) {
      alert(error.message || 'Unexpected error');
    }
  };

  return (
    <>
      <Header />
      {data.length ? (
        <ServicesList services={data} handleClick={(id) => addOrder(id)} />
      ) : (
        <Container>Loading...</Container>
      )}
    </>
  );
};

export default Home;
