import React from 'react';
import ReactDOM from 'react-dom';

// Pages to render

import App from './App';

navigator.serviceWorker.onmessage = (_event) => {
  console.log('notificacao chegou');
  document.dispatchEvent(new CustomEvent('Notificacao', { detail: 'chegou' }));
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
