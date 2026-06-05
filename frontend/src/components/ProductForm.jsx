import { useState } from "react";
function ProductForm({ onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        stock: "",
        active: true,
        description: "",
    });
    function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((currentData) => ({
        ...currentData,
        [name]: type === "checkbox" ? checked : value
    }));
}
    function handleSubmit(event) {
    event.preventDefault();

    const productData = {
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
    };
    onSubmit(productData);
}
    return (
        <section className="product-form">
            <header className="form-header">
                <h3>Add Product</h3>
                <button type="button" onClick={onClose}> Close </button> {/* Nut dong form them san pham */}
            </header>
            <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                id = "name"
                name = "name"
                type = "text"
                value = {formData.name}
                onChange={handleChange}
                />  
            </div>
            <div className="form-field">
                <label htmlFor="price">Price</label>
                <input
                id = "price"
                name = "price"
                type = "number"
                value = {formData.price}
                onChange={handleChange}
                />  
            </div>
            <div className="form-field">
                <label htmlFor="stock">Stock</label>
                <input 
                    id="stock"
                    name="stock"
                    type="number"
                    value={formData.stock}
                    onChange={handleChange}
                />
            </div>
            <div className="form-field">
                <label htmlFor="active">Active</label>
                <input
                    id="active"
                    name="active"
                    type="checkbox"
                    checked={formData.active}
                   onChange = {handleChange}
                />
            </div>
            <div className="form-field">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Save Product</button>
            </form>
        </section>
    );
}
export default ProductForm;