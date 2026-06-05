function ProductForm({ onClose }) {
    return (
        <section className="product-form">
            <header className="form-header">
                <h3>Add Product</h3>
                <button type="button" onClick={onClose}> Close </button> {/* Nut dong form them san pham */}
            </header>
        </section>
    );
}
export default ProductForm;