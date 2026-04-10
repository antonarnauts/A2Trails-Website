import {StrictMode, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Suspense fallback={<div className="min-h-screen bg-[#121212] flex items-center justify-center text-white">Loading...</div>}>
        <App />
      </Suspense>
    </HelmetProvider>
  </StrictMode>,
);
