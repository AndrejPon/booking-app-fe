import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => (
  <Button size='lg' bgcolor='green' color='blue'>
    Registruotis
  </Button>
);
export const Secondary = () => (
  <Button size='md' bgcolor='red' color='white'>
    Registruotis
  </Button>
);
