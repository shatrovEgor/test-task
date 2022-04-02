import React from 'react';
import { TextField } from '@mui/material';

export const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'email',
    'password',
    'passwordRep',
    'oldPassword'
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Не заполнено';
    }
  });
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Некорректный формат Email';
  }

  if (!/[A-Z]/.test(values.password)) {
    errors.password = 'Нет заглавной буквы';
  }

  if (values.password !== values.passwordRep) {
    errors.passwordRep = 'Повторите введенный пароль';
  }

  if (values.password === values.oldPassword) {
    errors.password = 'Пароли должны отличаться'
  }
  return errors;
};

const minLength = (min) => (value) => (value && value.length < min ? `Пароль не менее ${min} символов` : undefined);
const maxLength = (max) => (value) => (value && value.length > max ? `Пароль не более ${max} символов` : undefined);


export const maxValue = minLength(4);
export const minValue = maxLength(10);

export const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    sx={{ marginTop: '20px' }}
    fullWidth
    variant="outlined"
    color="neutral"
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);
