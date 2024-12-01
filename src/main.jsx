import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Tranquiluxe } from 'uvcanvas';

createRoot(document.getElementById('root')).render(
  <>
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    >
      <Tranquiluxe />
    </div>
    <StrictMode>
      <App />
    </StrictMode>
  </>
);
