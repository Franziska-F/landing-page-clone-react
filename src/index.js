import React from 'react';

import ReactDOM from 'react-dom/client';

import {
  css,
  Global,
} from '@emotion/react';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: 'Roboto', sans-serif;

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);


