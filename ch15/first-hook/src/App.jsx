import './App.css'
import CounterDemo from './components/CounterDemo'
import FocusInput from './components/FocusInput'
import GreetingCard from './components/GreetingCard'
import GreetingForm from './components/GreetingForm'
import ThemeToggleButton from './components/ThemeToggleButton'
import ToggleBox from './components/ToggleBox'
import UserGreeting from './components/UserGreeting'
import UserHeader from './components/UserHeader'
import { GreetingProvider } from './context/GreetingContext'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'

function Layout() {
  const { isDark } = useTheme()

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <h1>커스텀 훅을 만들어보자.</h1>

      <section className="section">
        <h2>Context 연습문제</h2>
        <GreetingForm />
        <div className="gap" />
        <GreetingCard />
      </section>

      <section className="section">
        <h2>Context - 떨어진 두 컴포넌트가 같은 이름 공유</h2>
        <UserHeader />
        <div className="gap" />
        <UserGreeting />
      </section>

      <section className="section">
        <h2>Context - props 없이 다크 모드 켜기</h2>
        <ThemeToggleButton />
      </section>

      <section className="section">
        <h2>커스텀 훅 - useToggle / useCounter</h2>
        <ToggleBox />
        <div className="gap"></div>
        <CounterDemo />
      </section>

      <section className="section">
        <h2>useRef - 입력 칸에 커서 넣기</h2>
        <FocusInput />
      </section>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <GreetingProvider>
          <Layout />
        </GreetingProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
