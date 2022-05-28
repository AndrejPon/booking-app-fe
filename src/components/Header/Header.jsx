import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';
import Navigation from '../Navigation/Navigation';
import Logo from '../../assets/images/Logo.png';

const links = [
  { title: 'Pradžia', link: '/' },
  { title: 'Prisijungti', link: '/login' },
  { title: 'Registruotis', link: '/register' },
  { title: 'Mano užsakymai', link: '/orders' },
];

const Header = ({ children }) => {
  return (
    <S.Header>
      <S.StyledLink to='/'>
        <S.Logo src={Logo} alt='Logo' />
      </S.StyledLink>

      {children}
      <Navigation links={links} />
    </S.Header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
