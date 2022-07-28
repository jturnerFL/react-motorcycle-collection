import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './components';

let myTitle = "Motorcycle Inventory"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home title={myTitle} />
  </React.StrictMode>
);


