import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

const HomePage = React.lazy(() => import('./components/pages/HomePage'));
const AboutPage = React.lazy(() => import('./components/pages/AboutPage'));

export default function App() {
  return (
    <React.Suspense
      fallback={
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </React.Suspense>
  );
}
