export default function TodoItem({ todo, onStatusChange, onDelete, onEdit }) {
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
    </li>
  )
}
