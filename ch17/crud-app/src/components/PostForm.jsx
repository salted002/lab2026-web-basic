import { useEffect, useState } from 'react'

export default function PostForm({ editingPost, onSubmit, onCancel }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // 수정 중인 글이 들어오면 입력칸에 글 값을 채우고, 아니면 빈칸
  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title)
      setBody(editingPost.body)
    } else {
      setTitle('')
      setBody('')
    }
  }, [editingPost])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title.trim() === '') {
      alert('제목을 입력하세요.')
      return
    }
    const post = { title: title.trim(), body: body.trim() }
    onSubmit(post)
    setTitle('')
    setBody('')
  }

  const isEditing = Boolean(editingPost)

  return (
    <form className="form card" onSubmit={handleSubmit}>
      <h2>{isEditing ? '글 수정하기' : '새 글 작성하기'}</h2>

      <input
        type="text"
        placeholder="제목을 입력하세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="내용"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <div className="button-row">
        <button type="submit">{isEditing ? '수정 저장' : '추가'}</button>
        {isEditing && (
          <button type="button" className="secondary" onClick={onCancel}>
            취소
          </button>
        )}
      </div>
    </form>
  )
}
