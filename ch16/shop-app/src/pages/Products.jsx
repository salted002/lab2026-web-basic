import { Link } from 'react-router-dom'
import { products } from '../data/products'

export default function Products() {
  return (
    <div>
      <h1>상품 목록</h1>
      <p className="muted">각 상품 카드를 누르면 상세페이지로 넘어갑니다.</p>

      {products.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`} className="card">
          <h3>{product.name}</h3>
          <div className="price">{product.price.toLocaleString()}원</div>
          <div className="muted">분류 | {product.category}</div>
        </Link>
      ))}
    </div>
  )
}
