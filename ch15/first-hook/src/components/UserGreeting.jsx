import { useUser } from '../context/UserContext'

export default function UserGreeting() {
  const { userName } = useUser()

  return (
    <div className="demo">
      <p className="greeting">{userName}님, 반가워요.</p>
    </div>
  )
}
