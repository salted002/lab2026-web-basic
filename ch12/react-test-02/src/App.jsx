import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoApp from './components/TodoApp'

function App() {
  return (
    <div>
      <h1>나의 할 일 목록</h1>
      <p className="subtitle">데이터(배열)만 바꾸면 화면이 따라 바뀝니다.</p>
      <TodoApp />
    </div>
  )
}

export default App
