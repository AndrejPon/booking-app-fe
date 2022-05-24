import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import InputField from '../components/InputField/InputField';

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const onRegister = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(userDetails),
        }
      );
      const data = await res.json();
      alert(data.msg || data.err || 'Nežinoma klaida');
      navigate('/login');
    } catch (error) {
      alert(error.message || 'Nenumatyta klaida');
    }
  };

  return (
    <>
      <Header>VK Studija</Header>
      <Container>
        <form onSubmit={onRegister}>
          <InputField
            name='email'
            placeholder='pastas@pastas.lt'
            label='El. pašto adresas'
            type='email'
            handleChange={(value) =>
              setUserDetails({ ...userDetails, email: value })
            }
          />
          <Button>Registruotis</Button>
        </form>
      </Container>
    </>
  );
};

export default Register;
