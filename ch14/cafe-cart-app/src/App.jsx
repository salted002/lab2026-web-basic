import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import CartSummary from './components/CartSummary'
import ProductList from './components/ProductList'

// 판매 상품 목록을 상수로 정의
const PRODUCTS = [
  { id: 1, name: '시그니처 밀크티', price: 5500 },
  { id: 2, name: '피치파파야 밀크티', price: 6000 },
  { id: 3, name: '티라미수 팩', price: 8000 },
  { id: 4, name: '뺑오쇼콜라', price: 4500 },
  { id: 5, name: '아이스크림 라떼', price: 6300 },
  { id: 6, name: '피스타치오 크림 라떼', price: 7800 },
  { id: 7, name: '콜드브루 연유 라떼', price: 4600 },
]

export default function App() {
  const [cart, setCart] = useState([])

  const handleAdd = (product) => {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.id === product.id)
    })
    return
  }

  const handleRemove = (id) => {
    return
  }

  return (
    <>
      <h1>커피사피엔스 장바구니</h1>
      <Card title="상품 목록">
        <ProductList products={PRODUCTS} />
      </Card>
      <Card title="장바구니">
        <CartSummary />
      </Card>
    </>
  )
}
