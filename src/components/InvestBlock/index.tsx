import React from 'react';
import {Container, Label} from './styles';

interface InvestBlockProps {
  label?: string;
}

export const InvestBlock = ({label}: InvestBlockProps) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};
