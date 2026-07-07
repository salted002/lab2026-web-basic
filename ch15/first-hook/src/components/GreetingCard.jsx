import { useGreeting } from '../context/GreetingContext'

export default function GreetingCard() {
  const { greeting } = useGreeting()

  return (
    <div className="demo">
      <p className="greeting">{greeting}!!</p>
    </div>
  )
}
