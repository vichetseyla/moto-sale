import { useState } from 'react'
import logo from './logo.svg'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import './App.css'
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<ProductDetails />} />
        <Route path="contact_us" element={<ContactUs />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
