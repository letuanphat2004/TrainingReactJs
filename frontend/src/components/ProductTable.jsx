function ProductTable({ products }) {
    return (
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
                        <td>{product.stock}</td>
                        <td>
                            <span className={product.active ? "status active" : "status inactive"}>
                                {product.active ? "🟢" : "🔴"}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default ProductTable;