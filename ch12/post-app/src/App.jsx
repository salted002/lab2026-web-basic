import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PostApp from './components/PostApp'

function App() {
  return (
    <div className="app">
      <h1>React로 만드는 게시판</h1>
      <p className="lead">
        사용자 목록과 게시글 목록 데이터를 받아와서 화면에 출력하는 방법을
        배웁니다.
      </p>
      <PostApp />
    </div>
  )
}

export default App
