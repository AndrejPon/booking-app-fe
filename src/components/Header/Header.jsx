import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';
<<<<<<< HEAD
import Navigation from '../Navigation/Navigation';

const links = [
  { title: 'Prisijungti', link: '/login' },
  { title: 'Registruotis', link: '/register' },
  { title: 'My list', link: '/' },
  { title: 'Add', link: '/add' },
];
=======
// import Navigation from '../Navigation/Navigation';

// const links = [
//   { title: 'Prisijungti', link: '/login' },
//   { title: 'Registruotis', link: '/register' },
//   { title: 'My list', link: '/' },
//   { title: 'Add', link: '/add' },
// ];
>>>>>>> 64187e5e39a016f3febabd357f3e26af78cf92f5

const Header = ({ children }) => {
  return (
    <S.Header>
      {children}
<<<<<<< HEAD
      <Navigation links={links} />
=======
      {/* <Navigation links={links} /> */}
>>>>>>> 64187e5e39a016f3febabd357f3e26af78cf92f5
    </S.Header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
