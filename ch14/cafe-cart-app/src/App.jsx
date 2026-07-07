import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import CartSummary from './components/CartSummary'
import Card from './components/Card'

const PRODUCTS = [
  { id: 1, name: '콜드브루 연유 라떼', price: 4500 },
  { id: 2, name: '깻페라떼', price: 5500 },
  { id: 3, name: '송파라떼', price: 7500 },
  { id: 4, name: '큐브라떼', price: 6500 },
  { id: 5, name: '바닐라라떼', price: 4000 },
  { id: 6, name: '피스타치오 라떼', price: 8500 },
]

function App() {
  const [cart, setCart] = useState([])

  const handleAdd = (product) => {
    setCart((prevCart) => {
      // 기존 배열에서 id가 product와 같은 item 찾기. => 있으면 인덱스값, 없으면 undefined 반환
      const found = prevCart.find((item) => item.id === product.id)
      if (found) {
        // 인덱스값이 존재하면 수량만 +1 한다.
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      // 없으면 수량을 1로 하여 추가한다.
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const handleChangeQuantity = (id, diff) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + diff) }
          : item,
      ),
    )
  }

  const handleClear = () => {
    setCart([])
  }

  return (
    <>
      <h1>카페 장바구니</h1>
      <Card title="상품 목록">
        <ProductList products={PRODUCTS} onAdd={handleAdd} />
      </Card>

      <Card title="장바구니">
        <CartSummary
          items={cart}
          onRemove={handleRemove}
          onChangeQuantity={handleChangeQuantity}
          onClear={handleClear}
        />
      </Card>
    </>
  )
}

export default App
