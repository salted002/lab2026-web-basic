import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

// 할 일 데이터 로직 작업 영역
let todos = []
let nextId = 1

const addTodo = (text) => {
  const trimmed = text.trim() // trim()은 앞뒤 공백 제거 또는 빈 문자열일 경우 null
  if (trimmed === '') return null

  const todo = { id: nextId, text: trimmed, done: false }

  nextId += 1
  todos = [...todos, todo]
  return todo
}

const toggleTodo = (id) => {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo,
  )
}

const removeTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id)
}

const getTodos = () => {
  return [...todos]
}

const getRemainingCount = () => {
  return todos.filter((todo) => !todo.done).length
}

// 화면 작업 영역
const app = document.querySelector('#app')

const todoSection = document.createElement('section')
app.appendChild(todoSection)

todoSection.innerHTML = `
  <h1>To Do 모듈</h1>
  <p>할 일 목록(To Do List) 예제입니다.</p>
  <div>
    <input id="todo-input" placeholder="할 일을 입력하세요." type="text" />
    <button id="add-btn">추가</button>
  </div>
  <p id="remaining"></p>
  <ul id="todo-list"></ul>
`

const input = todoSection.querySelector('#todo-input')
// document로 써도 되지만, todoSection이 더 명확하니까
const addBtn = todoSection.querySelector('#add-btn')

// UI에서 버튼 달기
const handleAdd = () => {
  addTodo(input.value)
  input.value = ''
  input.focus()
  refresh()
}
addBtn.addEventListener('click', handleAdd)
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleAdd()
})

// 화면 그리는 함수
const render = (todos, remaining) => {
  const list = todoSection.querySelector('#todo-list')
  todoSection.querySelector('#remaining').textContent =
    `남은 할 일은 ${remaining}개입니다.`

  list.innerHTML = ''
  todos.forEach((todo) => {
    const li = document.createElement('li')
    li.style.listStyle = 'none'
    li.style.padding = '3px'

    const textSpan = document.createElement('span')
    textSpan.textContent = todo.text
    textSpan.style.cursor = 'pointer'
    textSpan.style.textDecoration = todo.done ? 'line-through' : 'none'
    textSpan.addEventListener('click', () => {
      toggleTodo(todo.id)
      refresh()
    })

    const delBtn = document.createElement('button')
    delBtn.textContent = '삭제'
    delBtn.style.marginLeft = '8px'
    delBtn.addEventListener('click', () => {
      removeTodo(todo.id)
      refresh()
    })

    li.append(textSpan, delBtn)
    list.appendChild(li)
  })
}

// 화면의 데이터를 최신으로 유지하면서, 화면 그리는 render() 함수 호출
const refresh = () => {
  render(getTodos(), getRemainingCount())
}
