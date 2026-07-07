import { Link, useNavigate, useParams } from 'react-router-dom'
import { findProductById } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams() // 주소의 :id 자리에 들어온 값을 꺼낸다.
  const navigate = useNavigate()

  const product = findProductById(id) // 주소에서 얻은 id값으로 상품을 찾는다.

  if (!product) {
    return (
      <div>
        <h1>상품을 찾을 수 없습니다.</h1>
        <p className="muted">상품 ID가 {id}인 상품은 없습니다.</p>
        <Link to="/products">← 상품 목록으로 돌아가기</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p className="price">{product.price.toLocaleString()}원</p>
      <p className="muted">분류 | {product.category}</p>
      <p>{product.desc}</p>
      <hr />
      <button onClick={() => navigate(-1)}>← 뒤로</button>{' '}
      <button className="primary" onClick={() => navigate('/products')}>
        상품 목록으로
      </button>
    </div>
  )
}
