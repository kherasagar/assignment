import React from 'react';
import { InputContainer } from './InputContainer';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { render } from '../../Utils/RTLUtils';

describe('InputContainer Component', () => {

  it('renders Gene Symbol input', () => {
    render(<InputContainer />);
    expect(screen.getByPlaceholderText('Gene Symbol')).toBeInTheDocument();
  });

  it('renders Position input', () => {
    render(<InputContainer />);
    expect(screen.getByPlaceholderText('Position')).toBeInTheDocument();
  });

  it('renders Letter input', () => {
    render(<InputContainer />);
    expect(screen.getByPlaceholderText('Lette')).toBeInTheDocument();
  });

  it('renders Get Transcripts Button', () => {
    render(<InputContainer />);
    expect(screen.getByRole('button', { name: /Get Transcripts/i })).toBeInTheDocument();
  });
});