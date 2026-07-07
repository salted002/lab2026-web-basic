import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1>404 · Page Not Found</h1>
      <p className="muted">
        페이지를 찾을 수 없습니다. 주소를 다시 확인해주세요.
      </p>
      <Link to="/">← 처음으로 돌아가기</Link>
    </div>
  )
}
