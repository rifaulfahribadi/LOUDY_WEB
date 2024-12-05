import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Hanya di sini
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/LOUDY_WEB"> {/* Pastikan basename benar */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
