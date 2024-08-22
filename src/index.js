import React from 'react';
import ReactDOM from 'react-dom/client';

import Teacher from './pages/Teacher';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditTeacher from './pages/EditTeacher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Teacher />} />
    <Route path="/editTeacher" element={<EditTeacher />} />
  </Routes>
  
  </BrowserRouter>
    
 
);

