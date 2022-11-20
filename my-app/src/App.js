import "./App.css";
import Home from "./compoment/Home";
import NavBar from "./compoment/NavBar";
import Products from './compoment/Products'
import { Routes, Route } from 'react-router-dom'
import Product from "./compoment/Product";
import Carts from "./compoment/Carts";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="products" element={<Products />}/>
        <Route path="carts" element={<Carts />}/>
        <Route path="products/:id" element={<Product />}/>
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </div>
  );
}

export default App;
