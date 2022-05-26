import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import InputField from '../components/InputField/InputField';

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
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
      if (
        data.msg === 'Neteisingi duomenys. Patikrinkite įvesties laukus.' ||
        data.error
      ) {
        return;
      } else {
        navigate('/login');
      }
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
            name='first-name'
            placeholder='Vardas'
            label='Vardas'
            type='text'
            handleChange={(value) =>
              setUserDetails({ ...userDetails, first_name: value })
            }
          />
          <InputField
            name='last-name'
            placeholder='Pavardė'
            label='Pavardė'
            type='text'
            handleChange={(value) =>
              setUserDetails({ ...userDetails, last_name: value })
            }
          />
          <InputField
            name='phone-number'
            placeholder='370xxxxxxxx'
            label='Telefono numeris'
            type='tel'
            handleChange={(value) =>
              setUserDetails({ ...userDetails, phone_number: value })
            }
          />
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
          <Button>Registruotis</Button>
        </form>
      </Container>
    </>
  );
};

export default Register;
