import React from 'react';
import ReactDOM from 'react-dom/client';

import Authentication from './components/authentication/Authentication.jsx';
import AdminPanel from './components/main/AdminPanel.jsx';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Authentication />} />
        <Route path='/adminPanel' element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
