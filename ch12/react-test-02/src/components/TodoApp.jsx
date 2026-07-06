import { useState } from 'react'
import TodoItem from './TodoItem'

export default function TodoApp() {
  /* 상태관리: todos(할 일 목록 배열), text(할 일 입력값), filter(선택된 필터) */
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      text: '수요일 저녁 8시 디스코드로 스터디 참여하기',
      status: 'notStarted',
    },
    { id: crypto.randomUUID(), text: '운동 계획 세우기', status: 'notStarted' },
    {
      id: crypto.randomUUID(),
      text: '삼선 슬리퍼 주문하기',
      status: 'completed',
    },
    { id: crypto.randomUUID(), text: '저녁 약 먹기', status: 'notStarted' },
    {
      id: crypto.randomUUID(),
      text: '7월치 서류제출하기',
      status: 'notStarted',
    },
    {
      id: crypto.randomUUID(),
      text: '배송 온 옷들 걸어놓기',
      status: 'inProgress',
    },
  ])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all')

  /* 이벤트 핸들러 함수 */
  // 입력칸의 값(value)이 변경될 때 text상태 업데이트하기 *setText
  const handleInput = (e) => setText(e.target.value)

  // 새로운 할 일을 목록(배열)에 추가하기 *setTodos => 폼의 onSubmit에 전달*새로고침방지!
  const handleAdd = (e) => {
    e.preventDefault() // 폼이 기본적으로 실행하는 새로고침을 막아준다. (데이터 보호)

    // 입력값 앞뒤 공백 제거 && 빈 값 무시하는 로직
    const trimmed = text.trim()
    if (trimmed === '') return // 공백 제거한 후 빈 문자열이면 아무 동작 없이 리턴

    const newTodo = {
      id: crypto.randomUUID(),
      text: trimmed,
      status: 'notStarted',
    }
    setTodos((prev) => [...prev, newTodo])
    setText('') // 설정 후에는 입력 상태값을 비워준다.
  }

  // 할 일 항목 상태 바꾸기(시작 전/진행 중/완료) *setTodos
  const handleStatusChange = () => {}

  // 할 일 항목 목록(배열)에서 삭제하기 *setTodos
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // 할 일 항목의 내용(text) 수정하기 *setTodos
  const handleEdit = (id, newText) => {
    const trimmed = newText.trim()
    if (trimmed === '') return
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: trimmed } : todo)),
    )
  }

  /* state 수정 없이, 화면 그릴 때 즉석에서 만드는 값 */
  // 화면에 출력할 할 일 목록 : filter값과 status값이 일치할 때
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'notStarted') return todo.status === 'notStarted'
    if (filter === 'inProgress') return todo.status === 'inProgress'
    if (filter === 'completed') return todo.status === 'completed'
    return true
  })

  return (
    <div className="card">
      {/* 할 일 추가 입력폼 */}
      <h2>할 일 추가하기</h2>
      <form className="todo-form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="할 일을 입력하세요."
          value={text}
          onChange={handleInput}
        />
        <button className="add" type="submit">
          +
        </button>
      </form>
      <h2>할 일 목록 보기</h2>
      {/* 필터 버튼 모음 */}
      <div className="todo-form">
        {/* 필터 버튼 : 나중에 map으로 펼치기 해보자.*/}
        <button
          className={filter === 'all' ? '' : 'ghost'}
          onClick={() => setFilter('all')}
        >
          전체보기
        </button>
        <button
          className={filter === 'notStarted' ? '' : 'ghost'}
          onClick={() => setFilter('notStarted')}
        >
          시작 전
        </button>
        <button
          className={filter === 'inProgress' ? '' : 'ghost'}
          onClick={() => setFilter('inProgress')}
        >
          진행 중
        </button>
        <button
          className={filter === 'completed' ? '' : 'ghost'}
          onClick={() => setFilter('completed')}
        >
          완료한 일
        </button>
      </div>
      {/* 필터링된 할 일 목록 개수 */}
      {filteredTodos.length}개{/* 필터링된 할 일 목록 출력 영역 (map 사용) */}
      {filteredTodos.length === 0 ? (
        <p className="empty">앗! 보여드릴 할 일이 없어요.</p>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
