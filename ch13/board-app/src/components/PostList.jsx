import { useEffect } from 'react'
import { useState } from 'react'

export default function PostList() {
  // 상태: 불러온 게시글 데이터
  const [posts, setPosts] = useState([])
  // 상태: 게시글 불러오는 중(기본값: true)
  const [loading, setLoading] = useState(true)
  // 상태: 에러를 담을 상태(기본값: null)
  const [error, setError] = useState(null)

  useEffect(() => {
    // async로 코드를 시작할 수 없으므로 함수로 만들어준 뒤 바로 호출한다.
    const loadPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!res.ok) {
          throw new Error(`서버 응답 오류: ${res.status}`)
        }
        const data = await res.json()
        setPosts(data.slice(0, 5))
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  if (loading) {
    return (
      <div className="demo">
        <p className="status-loading">글을 불러오는 중...</p>
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
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id}>
            <div className="post-title">{post.title}</div>
            <div className="post-body">{post.body}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
