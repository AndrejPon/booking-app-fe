import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import ServicesList from '../components/ServicesList/ServicesList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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

  const notify = () => {
    toast(toast.warn(), {
      onOpen: () =>
        toast.warn(
          data.msg ||
            'Norėdami testi, prisijunkite' ||
            data.error ||
            'Unknown error',
          {
            position: toast.POSITION.TOP_CENTER,
          }
        ),
      onClose: () => navigate('/orders'),
    });
  };
  // toast.error('Error Notification !', {
  //   position: toast.POSITION.TOP_LEFT,
  // });

  useEffect(
    () => async () => {
      setData(await getData());
    },
    []
  );

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
      notify();
      // navigate('/orders');
      // toast.warn(
      //   data.msg ||
      //     'Norėdami testi, prisijunkite' ||
      //     data.error ||
      //     'Unknown error',
      //   {
      //     position: toast.POSITION.TOP_CENTER,
      //   }
      // );

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
      <ToastContainer />
      {data.length ? (
        <ServicesList services={data} handleClick={(id) => addOrder(id)} />
      ) : (
        <Container>Loading...</Container>
      )}
    </>
  );
};

export default Home;
