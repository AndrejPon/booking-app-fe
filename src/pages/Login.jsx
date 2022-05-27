import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import InputField from '../components/InputField/InputField';

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(userDetails),
        }
      );
      const data = await res.json();
      if (!data.token) {
        return alert(data.error || data.msg || 'Nežinoma klaida');
      }
      localStorage.setItem('token', data.token);
      alert(data.msg || data.error || 'Nežinoma klaida');
      if (
        data.msg === 'Neteisingi duomenys. Patikrinkite įvesties laukus.' ||
        data.error
      ) {
        return;
      } else {
        navigate('/');
      }
    } catch (error) {
      alert(error.message || 'Nenumatyta klaida');
    }
  };

  return (
    <>
      <Header>
        {' '}
        <Link to='/' className='home-link'>
          VK Studija
        </Link>
      </Header>
      <Container>
        <form onSubmit={onLogin}>
          <InputField
            name='email'
            placeholder='pastas@pastas.lt'
            label='El. pašto adresas'
            type='email'
            handleChange={(value) =>
              setUserDetails({ ...userDetails, email: value })
            }
          />
          <InputField
            name='password'
            placeholder='Slaptažodis'
            label='Slaptažodis'
            type='password'
            handleChange={(value) =>
              setUserDetails({ ...userDetails, password: value })
            }
          />
          <Button>Prisijungti</Button>
        </form>
      </Container>
    </>
  );
};

export default Login;
