import { useState } from 'react'
import TodoItem from './TodoItem'

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: '취사병 지원하기', done: false },
    { id: crypto.randomUUID(), text: '매머드커피 주문앱 설치하기', done: true },
    {
      id: crypto.randomUUID(),
      text: 'React 개발자 양성과정 지원 서류 제출하기',
      done: true,
    
    },
    { id: crypto.randomUUID(), text: 'MBTI 검사하기', done: false },
    {
      id: crypto.randomUUID(),
      text: '확장프로그램 GitMoji 설치하기',
      done: true,
    },
    {
      id: crypto.randomUUID(),
      text: '수호야 난 여전히 잠이 안 와',
      done: false,
    },
  ])



  return (
    <div className="card">
      <h2>할 일을 입력하여 추가하세요.</h2>

      <form action=""></form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todos.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}
