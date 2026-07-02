/*
  PostList처럼 글 목록을 받아오되,
  사용자가 직접 데이터를 새로 받아올 수 있는 '다시 불러오기' 버튼을 추가한다.
*/

import { useEffect } from 'react'
import { useState } from 'react'

export default function MyPostList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  /*
    MyPostList에서는 데이터 불러오기를
      1. 처음 화면 렌더링 후(새로고침 후)
      2. 사용자가 불러오기 버튼을 직접 눌렀을 때
    두 가지 경우에 호출해야 하기 때문에,
    useEffect() 밖에서 먼저 불러오기 함수를 만든다.
  */
  const loadPosts = async () => {
    setLoading(true)
    setError(null)

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

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <div className="demo">
      <div className="toolbar">
        <button className="primary" onClick={loadPosts}>
          다시 불러오기
        </button>
        {!loading && !error && (
          <span className="hint">글 {posts.length}개를 불러왔습니다.</span>
        )}
      </div>
      {loading && <p className="status-loading">글을 불러오는 중...</p>}
      {error && (
        <p className="status-error">불러오기에 실패했습니다: {error}</p>
      )}
      {!loading && !error && (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id}>
              <div className="post-title">{post.title}</div>
              <div className="post-body">{post.body}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
