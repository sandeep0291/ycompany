import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Cart from './pages/cart/cart';
import Home from './pages/home/home';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
