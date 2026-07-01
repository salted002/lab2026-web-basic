import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greetings from './components/Greetings'
import ProfileCard from './components/ProfileCard'

function App() {
  const myName = '시원'

  return (
    <>
      <div className="app">
        <h1>첫번째 JSX 컴포넌트</h1>
        <p className="lead">JSX 컴포넌트를 직접 만들어봤어요!</p>
        <h2>안녕하세요? 좋은 아침입니다. ({myName}) </h2>

        <section className="section">
          <h2>컴포넌트 1. Greetings</h2>
          <Greetings name={myName} />
          <Greetings name="지훈" />
          <Greetings name="지민" />
        </section>

        <section className="section">
          <h2>컴포넌트 2. ProfileCard</h2>
          <div className="card-list">
            <ProfileCard
              name={myName}
              role="프론트엔드 개발자 지망생"
              hobbies={['등산', '영화', '독서']}
            />
            <ProfileCard
              name="지훈"
              role="영화배우"
              hobbies={['레슬링', '음악', '춤']}
            />
            <ProfileCard
              name="지민"
              role="영어학원 강사"
              hobbies={['게임', '만화', '맛집 탐방']}
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
