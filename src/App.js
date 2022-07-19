import React from 'react';
import './App.css';
import Product from './components/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          < Route exact path='/' element={<Product />} />
          < Route exact path='/product' element={<Product />} />
          < Route exact path='/details/:id' element={<ProductDetails />} />
        </Routes>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
