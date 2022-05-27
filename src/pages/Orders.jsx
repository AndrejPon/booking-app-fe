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

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(
    () => async () => {
      setData(await getData());
    },
    []
  );
  const deleteOrder = async (event) => {
    // console.log('deleteOrder ===', deleteOrder);
    event.preventDefault();
    // setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/v1/orders`, {
        method: 'POST',
        headers: {
          authorization: `Bearer: ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });
      const data = await res.json();

      // setReload(!reload);

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
        <OrdersList orders={data} handleClick={deleteOrder} />
      )}
    </>
  );
};

export default Home;
