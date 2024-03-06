import ReactDOM from 'react-dom/client';

import Authentication from './components/authentication/Authentication.jsx';
import AdminPanel from './components/home/AdminPanel.jsx';
import CreateBlogSuccess from './components/home/components/CreateBlogSuccess.jsx'
import DeleteBlogSuccess from './components/home/components/DeleteBlogsSuccess.jsx';
import EditBlogSuccess from './components/home/components/EditBlogSuccess.jsx';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Authentication />} />
        <Route path='/adminPanel' element={<AdminPanel />} />
        <Route path='/createBlogSuccessAnimation' element={<CreateBlogSuccess />} />
        <Route path='/deleteBlogSuccessAnimation' element={<DeleteBlogSuccess />} />
        <Route path='/editBlogSuccessAnimation' element={< EditBlogSuccess />} />
      </Routes>
    </BrowserRouter>
);
