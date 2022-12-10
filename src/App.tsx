import React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import Test from './components/atoms/Test';

import reactLogo from './assets/react.svg';
import './App.css';

import { decrement, increment } from './features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Box className="App">
      <Box>
        <Link href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </Box>
      <Typography component="h1"> Count is {count}</Typography>
      <Box className="card">
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" onClick={() => dispatch(increment())}>
            Increment
          </Button>

          <Button variant="contained" onClick={() => dispatch(decrement())}>
            Decrement
          </Button>
        </Box>
        <Typography
          sx={{
            mt: 2,
          }}
        >
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </Box>
      <Typography>Click on the Vite and React logos to learn more</Typography>
      <Test />
    </Box>
  );
}

export default App;
