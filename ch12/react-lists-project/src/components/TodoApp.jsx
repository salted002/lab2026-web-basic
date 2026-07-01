import { useState } from 'react'
import TodoItem from './TodoItem'

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: 'React 상태관리 복습하기', done: false },
    { id: crypto.randomUUID(), text: '물 1잔 마시기', done: true },
  ])
  const [text, setText] = useState('')

  // 필터(all | done | active) 추가하기
  const [filter, setFilter] = useState('all')

  // 필요한 함수 만들기
  // 1. input으로 할 일을 입력받아 배열에 추가하는 함수
  const handleAdd = (e) => {
    event.preventDefault() // form 제출 시 새로고침 방지

    const trimmed = text.trim() // 앞뒤 공백 제거
    if (trimmed === '') return // 빈 값은 추가하지 않음.

    const newTodo = { id: crypto.randomUUID(), text: trimmed, done: false }
    setTodos((prev) => [...prev, newTodo]) // 배열 맨 뒤에 새로운 입력값 추가

    setText('') // 추가 후에는 입력값 상태 비우기
  }

  // 2. 해당 할 일을 id값을 이용해 찾고, 완료 상태 바꾸기
  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    )
  }

  // 3. 해당 할 일의 id값을 이용해 찾고, 배열에서 삭제하기
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // 4. 필터로 화면에 그리는 요소 걸러내기
  // 주의 - 원본 배열을 수정하지 않고, 그리는 순간에만 걸러낸다.
  const visibleTodos = todos.filter((todo) => {
    if (filter === 'done') return todo.done
    if (filter === 'active') return !todo.done
    return true
  })

  const handleInput = (e) => setText(e.target.value)

  return (
    <div className="card">
      <h2>할 일 추가</h2>
      <form className="todo-form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="할 일을 입력하세요."
          value={text}
          onChange={handleInput}
        />
        <button type="submit">추가</button>
      </form>
      <div className="todo-form">
        <button
          className={filter === 'all' ? '' : 'ghost'}
          onClick={() => setFilter('all')}
        >
          전체
        </button>
        <button
          className={filter === 'active' ? '' : 'ghost'}
          onClick={() => setFilter('active')}
        >
          미완료
        </button>
        <button
          className={filter === 'done' ? '' : 'ghost'}
          onClick={() => setFilter('done')}
        >
          완료
        </button>
      </div>

      {/* 할 일 목록 배열 출력하기 */}
      {visibleTodos.length === 0 ? (
        <p className="empty">해당하는 할 일이 없습니다.</p>
      ) : (
        <ul className="todo-list">
          {visibleTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}

      {/* 할 일 목록 개수(배열의 길이) 출력하기 */}
      {visibleTodos.length > 0 && (
        <p className="count">필터링된 할 일 {visibleTodos.length}개</p>
      )}
    </div>
  )
}
