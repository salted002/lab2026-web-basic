import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoApp from './components/TodoApp'

function App() {
  return (
    <div>
      <h1>나의 할 일 목록 관리하기</h1>
      <p className="subtitle">상태 변경으로 할 일 목록을 관리하자.</p>
      <TodoApp />
    </div>
  )
}

export default App
