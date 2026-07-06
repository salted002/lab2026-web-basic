import { useState } from 'react'
import { useEffect } from 'react'

export default function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) {
          throw new Error(`서버 응답 오류: ${res.status}`)
        }

        const data = await res.json() // json()이 Promise 객체를 반환하므로 await 붙여줘야 함.
        setUsers(data.slice(0, 5))
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    loadUsers()
  }, []) // 빈 배열: 화면이 처음 뜰 때 한 번만 실행.

  if (loading) {
    return (
      <div className="demo">
        <p className="status-loading">사용자 목록을 불러오고 있습니다...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="demo">
        <p className="status-error">불러오기에 실패했습니다.</p>
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
