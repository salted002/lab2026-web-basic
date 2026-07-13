import { useState } from 'react'
import './App.css'
import PostList from './components/PostList'
import { usePosts } from './hooks/usePosts'
import PostForm from './components/PostForm'

function App() {
  const { posts, loading, error, add, edit, remove } = usePosts()
  const [editingPost, setEditingPost] = useState(null)

  // 제출시 글 추가 & 수정 담당 함수 handleSubmit
  // 실제 업무에서는 두 함수를 분리하는 것이 좋다.
  // data에는 변경된 신규 데이터 객체가 들어온다.
  const handleSubmit = async (data) => {
    try {
      if (editingPost) {
        await edit(editingPost.id, data)
        setEditingPost(null)
      } else {
        await add(data)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  // 삭제 담당 함수 handleDelete
  const handleDelete = async (id) => {
    if (!window.confirm('정말 삭제할까요?')) return
    try {
      await remove(id)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <h1>작은 게시판</h1>
      <p className="subtitle">
        GET / POST / PUT / DELETE로 서버로부터 글을 조회·추가·수정·삭제합니다.
      </p>

      <PostForm
        editingPost={editingPost}
        onSubmit={handleSubmit}
        onCancel={() => setEditingPost(null)}
      />

      <PostList
        posts={posts}
        loading={loading}
        error={error}
        onEdit={setEditingPost}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App
