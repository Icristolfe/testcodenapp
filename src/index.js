import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './routes/routes';
import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesApp /> < GlobalStyle />
  </React.StrictMode>
);