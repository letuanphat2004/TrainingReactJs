import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { getProducts } from './services/productApi';

function App() {
const appName = 'Admin';
const pageTitle = 'Products Management';
const description = 'Manage product data';

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
useEffect(() => {
  async function loadProducts() {
    try {
const data = await getProducts();
setProducts(data);
    } catch (err) {
setError(err.message);
    } finally {
setLoading(false);
    }
  }

  loadProducts();
}, []);

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
  <button type="button">Add Products</button>
</section>
<section className="content-panel">
{loading && <p>Loading products...</p>}
{error && <p className="error">{error}</p>}
{!loading && !error && (
<table className="product-table"> 
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Stock</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product) => (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>${product.price.toLocaleString("vi-VN")}</td>
        <td>{product.active ? "Active" : "Inactive"}</td>
      </tr>
    ))}
  </tbody>
</table>
)}
</section>
</main>
);

}

export default App;
