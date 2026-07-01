import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'
import PasswordField from './components/PasswordField'
import TextCounter from './components/TextCounter'
import Toggle from './components/Toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>React State 연습 : 혼자 만들어보기</h1>
      <p className="lead">
        state(useState)와 이벤트 — 버튼을 누르면 화면이 다시 그려집니다.
      </p>
      <section className="section">
        <h2>1. Counter 컴포넌트 — 숫자를 기억하고 바꿔보세요.</h2>
        <Counter />
      </section>
      <section className="section">
        <h2>2. Toggle — 좋아요 켜고 끄기 (boolean 이용)</h2>
        <Toggle />
      </section>
      <section className="section">
        <h2>3. TextCounter — 입력 글자 수 세기</h2>
        <TextCounter />
      </section>
      <section className="section">
        <h2>4. PasswordField — 비밀번호 보기/숨기기 토글</h2>
        <PasswordField />
      </section>
    </div>
  )
}

export default App
