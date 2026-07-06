import { useEffect } from 'react'
import { useState } from 'react'

export default function PostList() {
  // state 정의
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!res.ok) {
          throw new Error(`서버 응답 오류: ${res.statusText}`)
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
        <p className="status-loading">게시글 목록을 불러오고 있습니다...</p>
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
      <p className="hint">서버에서 받아 온 게시글은 {posts.length}개입니다.</p>
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
