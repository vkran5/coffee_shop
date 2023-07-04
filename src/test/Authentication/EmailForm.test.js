// import '@testing-library/jest-dom/extend-expect';
import { render, screen, userEvent, fireEvent } from '@testing-library/react';
import EmailForm from 'components/Authentication/EmailForm';
import { useForm } from 'react-hook-form';
import React from 'react';

const EmailFormTest = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return <EmailForm register={register} errors={errors} />;
};

test('Email shold be inputed correctly', () => {
  render(<EmailFormTest />);

  const emailInput = screen.getByLabelText('Email');

  fireEvent.input(emailInput, {
    target: {
      value: 'test@gmail.com',
    },
  });
  expect(emailInput.value).toBe('test@gmail.com');
});

test('Email shold be inputed correctly', () => {
  render(<EmailFormTest />);

  const emailInput = screen.getByLabelText('Email');

  fireEvent.input(emailInput, {
    target: {
      value: 'test@gmail.com',
    },
  });
  expect(emailInput.value).toBe('test@gmail.com');
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
