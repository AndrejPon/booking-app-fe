import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './InputField.style';

const InputField = ({
  name,
  placeholder,
  type,
  label,
  handleChange,
  initValue,
}) => {
  const [value, setValue] = useState(initValue || '');

  const onInputChange = (e) => {
    setValue(e.target.value);
    handleChange(e.target.value);
  };
  return (
    <S.InputContainer>
      <S.Label name={name}>{label}</S.Label>
      <S.InputField
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      />
    </S.InputContainer>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  initValue: PropTypes.string,
};

export default InputField;
