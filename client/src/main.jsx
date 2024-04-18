import ReactDOM from 'react-dom/client'

import Home from './components/Home'
import FullBlog from './components/blogs/components/FullBlog';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/fullBlog" element={<FullBlog />}/>
    </Routes>
  </BrowserRouter>
)
