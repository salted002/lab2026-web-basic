import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  function handleIncrease() {
    setCount(count + 1)
  }

  function handleDecrease() {
    if (count === 0) return
    setCount(count - 1)
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <div className="demo">
      <p className="counter-value">{count}</p>
      <div>
        <button onClick={handleDecrease} disabled={count === 0}>
          - 1
        </button>
        <button onClick={handleIncrease}>+ 1</button>
        <button onClick={handleReset}>RESET</button>
      </div>

      <p>버튼을 누르면 숫자가 바뀌고 화면이 다시 그려집니다.</p>
    </div>
  )
}
