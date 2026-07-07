export default function ProductList({ products, onAdd }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {products.map((product) => (
        <li className="product-row" key={product.id}>
          <span className="name">{product.name}</span>
          <span className="price">{product.price.toLocaleString()}원</span>

          <button onClick={() => onAdd(product)}>담기</button>
        </li>
      ))}
    </ul>
  )
}
