import { useEffect } from 'react'
import { useState } from 'react'

export default function MyPostList() {
  // state 정의
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // 서버 데이터 불러오는 함수 정의
  const loadPosts = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) {
        throw new Error(`서버 응답 오류: ${response.status}`)
      }
      const data = await response.json()
      setPosts(data.slice(0, 7))
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  // 화면 처음 뜰 때 불러오기
  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <div className="demo">
      <div className="toolbar">
        <button className="primary" onClick={loadPosts} disabled={loading}>
          다시 불러오기
        </button>
        {!loading && !error && (
          <span className="hint">불러온 글은 {posts.length}개입니다.</span>
        )}
      </div>

      {loading && <p className="status-loading">글을 불러오는 중입니다...</p>}

      {error && (
        <p className="status-error">불러오기에 실패했습니다: {error}</p>
      )}

      {!loading && !error && (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id}>
              <div className="post-title">{post.title}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
