// import '@testing-library/jest-dom/extend-expect';
import { render, screen, userEvent } from '@testing-library/react';
import EmailForm from 'components/Authentication/EmailForm';
import React from 'react';

test('Validates valid email', () => {
  render(<EmailForm />);
  const emailInput = screen.getByLabelText('email');

  // Set the email value
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

  // Get the validation message element
  const validationMessage = screen.getByText('Email is valid');

  // Assert that the validation message is visible
  expect(validationMessage).toBeTruthy();
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
