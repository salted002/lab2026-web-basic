import { useGreeting } from '../context/GreetingContext'

export default function GreetingForm() {
  const { greeting, setGreeting } = useGreeting()

  return (
    <div className="demo">
      <p className="welcome">
        오늘의 인사말: <strong>{greeting}</strong>
      </p>

      <input
        type="text"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
        placeholder="다른 인사말을 입력해보세요."
      />
    </div>
  )
}
