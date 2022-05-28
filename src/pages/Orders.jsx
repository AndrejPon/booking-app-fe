import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import OrdersList from '../components/OrdersList/OrdersList';

const getData = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/v1/orders`, {
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

const Orders = () => {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState();
  const navigate = useNavigate();

  useEffect(
    () => async () => {
      setData(await getData());
    },
    [reload]
  );

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const deleteOrder = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/orders/${id}`,
        {
          method: 'DELETE',
          headers: {
            authorization: `Bearer: ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(),
        }
      );
      const data = await res.json();

      setReload(!reload);

      alert(data.error || 'Jūsų užsakymas atšauktas.');
    } catch (error) {
      alert(error.message || 'Nenumatyta klaida');
    }
  };

  return (
    <>
      <Header>
        <Button size='md' handleClick={logout}>
          Atsijungti
        </Button>
      </Header>

      {!data.length ? (
        <Container>
          Jūsų užsakymų krepšelis dar tuščias.&nbsp;
          <Link to='/'>Pridėkite užsakymą.</Link>
        </Container>
      ) : (
        <>
          <Container>Mano užsakymai</Container>
          <OrdersList orders={data} handleClick={(id) => deleteOrder(id)} />
        </>
      )}
    </>
  );
};

export default Orders;
