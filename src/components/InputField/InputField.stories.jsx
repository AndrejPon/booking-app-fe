import React from 'react';
import InputField from './InputField';

export default {
  title: 'InputField',
  component: InputField,
};

export const Default = () => (
  <InputField label='Vardas' name='name' placeholder='Jūsų vardas' />
);
