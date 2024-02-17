import ReactDOM from 'react-dom/client';

import Authentication from './components/authentication/Authentication.jsx';
import AdminPanel from './components/home/AdminPanel.jsx';
import Success from './components/home/components/Success.jsx'

import { Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Authentication />} />
        <Route path='/adminPanel' element={<AdminPanel />} />
        <Route path='/successAnimation' element={<Success />} />
      </Routes>
    </BrowserRouter>
);
