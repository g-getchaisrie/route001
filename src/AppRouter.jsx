// AppRouter.jsx 
// ปรับ AppRouter.js: เนื่องจากใช้ Redux จัดการกับ state (ไม่ต้องส่ง props)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail.jsx';
import Home from './pages/Home.jsx';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/product" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
