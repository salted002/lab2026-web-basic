import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <div className="app">
        <h1>state와 useState로 변하는 화면 확인하기</h1>
        <p className="lead">버튼을 누르면 화면이 다시 그려집니다.</p>
        <section className="section">
          <h2>1. Counter -- 숫자 기억하고 바꾸기</h2>
          <Counter />
        </section>
        <section className="section">
          <h2>2. Toggle -- 좋아요 켜고 끄기</h2>
        </section>
        <section className="section">
          <h2>3. TextCounter -- 입력 글자 수 세기</h2>
        </section>
        <section className="section">
          <h2>4. PasswordField -- 비밀번호 보기 토글</h2>
        </section>
      </div>
    </>
  )
}

export default App
