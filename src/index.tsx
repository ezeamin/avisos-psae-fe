import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import ErrorBoundary from './views/Error/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
