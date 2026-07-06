export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />

      <span className={`text ${todo.done ? 'done' : ''}`}>{todo.text}</span>

      <button className="danger" onClick={() => onDelete(todo.id)}>
        삭제
      </button>
    </li>
  )
}
