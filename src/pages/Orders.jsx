import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  useEffect(
    () => async () => {
      setData(await getData());
    },
    [reload]
  );
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
        <Link to='/' className='home-link'>
          VK Studija
        </Link>
      </Header>
      {data.length === 0 && <div>Jūsų užsakymų krepšelis dar tuščias...</div>}
      {data.length > 0 && (
        <OrdersList orders={data} handleClick={(id) => deleteOrder(id)} />
      )}
    </>
  );
};

export default Orders;
