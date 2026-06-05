import { useState, useEffect } from 'react'
import './App.css'
import { getProducts } from './services/productApi';
import ProductTable from './components/ProductTable';

function App() {
const appName = 'Admin';
const pageTitle = 'Products Management';
const description = 'Manage product data';

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [searchKeyword, setSearchKeyword] = useState("");
useEffect(() => {
  async function loadProducts() {
    try {
      setLoading(true);
      setError("");
const data = await getProducts(searchKeyword); // Goi ham getProducts tu productApi.js de lay danh sach san pham tu backend Spring Boot
setProducts(data);
    } catch (err) {
setError(err.message);
    } finally {
setLoading(false);
    }
  }

  loadProducts();
}, [searchKeyword]);

return (
<main className="app-shell">
<header className="top-bar">
<div>
  <h1>{appName}</h1>
  <p>Internal business dashboard</p>
</div>
<span className="status-badge">API: localhost:8080</span>
</header>
<section className="page-hero">
  <div>
  <h2>{pageTitle}</h2>
  <p>{description}</p>
  </div>
  <div className="page-actions"> 
  <input
    type="text" 
    placeholder="Search products..." 
    className="search-input" 
    value={searchKeyword}
    onChange={(event) => setSearchKeyword(event.target.value)}
  /> 
  <button type="button">Add Products</button> {/* Nut mo thao tac them san pham */}
</div>
</section>
<section className="content-panel">
{loading && <p>Loading products...</p>}
{error && <p className="error">{error}</p>}
{!loading && !error && products.length === 0 && (
  <p className="empty-message">No products found.</p>
)}
{!loading && !error && products.length > 0 && (
  <ProductTable products={products} /> 
)}
</section>
</main>
);
}

export default App;
