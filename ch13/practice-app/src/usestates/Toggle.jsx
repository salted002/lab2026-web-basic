import { useState } from 'react'

export default function Toggle() {
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    setIsOn((prev) => !prev)
  }

  return (
    <div style={{ backgroundColor: isOn ? '#4ade80' : '#d1d5db' }}>
      <span>{isOn ? `켜짐` : `꺼짐`}</span>
      <button onClick={handleToggle}>{isOn ? `끄기` : `켜기`}</button>
    </div>
  )
}
