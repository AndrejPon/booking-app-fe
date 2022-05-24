import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
};

export const Default = () => <Navigation to='/login'>Prisijungti</Navigation>;
