export default function ProductList({ products }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {products.map((product) => (
        <li className="product-row" key={product.id}>
          <span className="name">{product.name}</span>
          <span className="price">{product.price}원</span>
        </li>
      ))}
    </ul>
  )
}
