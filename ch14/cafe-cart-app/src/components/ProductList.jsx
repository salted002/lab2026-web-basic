export default function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li className="product-row" key={product.id}>
          <span className="name">{product.name}</span>
          <span className="price">{product.price.toLocaleString()}원</span>
        </li>
      ))}
    </ul>
  )
}
