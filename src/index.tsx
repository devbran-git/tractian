import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
