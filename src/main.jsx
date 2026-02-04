import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Apply saved theme ASAP to avoid flash
try {
  const saved = localStorage.getItem('hp_theme');
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
  const theme = saved === 'light' || saved === 'dark' ? saved : (prefersDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle('dark', theme === 'dark');
} catch {
  // ignore
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
