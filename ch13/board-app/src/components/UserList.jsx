import { useEffect } from 'react'
import { useState } from 'react'

export default function UserList() {
  /* 상태 관리:
    1. 받아온 유저 데이터 users
    2. 불러오는 중인지 loading (boolean)
    3. 실패시 에러 (기본값 null)
  */
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  /* 외부 데이터를 받아오는 작업은 useEffect() 안에서 한다.
    -> 리렌더마다 요청이 무한으로 실행되지 않도록
    -> useEffect() 안의 코드는 렌더링이 끝난 후에 실행된다.
    *useEffect()는 컴포넌트의 가장 상위에서 선언한다.
  */
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!res.ok) {
          throw new Error(`서버 응답 오류: ${res.status}`)
        }

        const data = await res.json()
        setUsers(data.slice(0, 5))
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    loadUsers()
  }, [])
  // 함수 뒤에 빈 배열을 인자로 줄 경우: 화면이 처음 뜰 때 한번만 실행된다.

  if (loading) {
    return (
      <div className="demo">
        <p className="status-loading">사용자 목록을 불러오는 중...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="demo">
        <p className="status-error">불러오기에 실패했습니다: {error}</p>
      </div>
    )
  }

  return (
    <div className="demo">
      <p className="hint">서버에서 받아 온 사용자는 {users.length}명입니다.</p>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <div className="name">{user.name}</div>
            <div className="email">{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
