import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/Theme';

import App from './App';
import { ContextProvider } from './context/ContextProvider';

document.body.style.backgroundColor = theme.palette.background.default;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
