import { useState } from 'react'

export default function TodoItem({ todo, onStatusChange, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.text)

  const save = () => {
    onEdit(todo.id, draft)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <li className="todo-item">
        <input
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onBlur={save}
          onKeyDown={(event) => {
            if (event.key === 'Enter') save()
            if (event.key === 'Escape') {
              setDraft(todo.text)
              setIsEditing(false)
            }
          }}
          autoFocus
        />
      </li>
    )
  }

  return (
    <li className="todo-item">
      <button>
        {todo.status === 'notStarted'
          ? '시작 전'
          : todo.status === 'inProgress'
            ? '진행 중'
            : '완료'}
      </button>
      <span>{todo.text}</span>
      <button
        className="danger"
        onClick={() => {
          setIsEditing(true)
          onEdit(todo.id)
        }}
      >
        수정
      </button>
      <button className="danger" onClick={() => onDelete(todo.id)}>
        삭제
      </button>
    </li>
  )
}
