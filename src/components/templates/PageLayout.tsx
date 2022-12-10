import { Container } from '@mui/material';
import React from 'react';

export default function PageLayout(params: { children: React.ReactNode }) {
  const { children } = params;
  return <Container>{children}</Container>;
}
