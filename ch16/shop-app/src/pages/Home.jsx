import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        React Router로 만든 작은 쇼핑몰 예제입니다. 위 메뉴를 눌러 화면이 바뀌는
        것을 확인해 보세요. 주소창의 주소도 같이 바뀝니다.
      </p>

      <p>
        바로 <Link to="/products">상품 보러 가기 →</Link>
      </p>
    </div>
  )
}
