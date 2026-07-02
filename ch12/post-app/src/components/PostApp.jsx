import { useState } from 'react'

export default function PostApp() {
  const [posts, setPosts] = useState([
    {
      id: crypto.randomUUID(),
      title: '약한영웅 드라마 리뷰 써왔습니다.',
      content: '시은이 건들지마라 부탁했잖아',
    },
    {
      id: crypto.randomUUID(),
      title: '자바스크립트 스터디 하실 분을 모집합니다.',
      content: '장소는 큰길가 맞은편에 있는 에이바우트 카페입니다.',
    },
    {
      id: crypto.randomUUID(),
      title: '폰워시는 핸드폰 액정을 닦는 훌륭한 도구입니다.',
      content: '다들 구매합시다.',
    },
  ])

  return (
    <div className="card post-app">
      <h2>게시글 목록</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <div className="post-content">
              <strong className="post-title">{post.title}</strong>
              <div className="post-body">{post.content}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
