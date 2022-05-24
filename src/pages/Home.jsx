import React, { useEffect, useState } from 'react';
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
  useEffect(
    () => async () => {
      setData(await getData());
    },
    []
  );

  return (
    <>
      <Header>VK Studija</Header>
      {data.length > 0 && (
        <ServicesList services={data} handleClick={(id) => alert(id)} />
      )}
    </>
  );
};

export default Home;
