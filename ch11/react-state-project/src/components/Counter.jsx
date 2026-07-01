import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0) // 초깃값 0

  function handleIncrease() {
    setCount(count + 1) // count값(state값)
  }

  function handleDecrease() {
    if (count === 0) return // 0이면 바로 리턴(멈추기)
    setCount(count - 1)
  }

  function handleReset() {
    setCount(0)
  }

  function handleTwoIncrease() {
    setCount(count + 2) // count값(state값)
  }

  function handleTwoDecrease() {
    if (count <= 1) return // 0이면 바로 리턴(멈추기)
    setCount(count - 2)
  }

  return (
    <div className="demo">
      <p className="counter-value">{count}</p>

      <div className="button-row">
        <button onClick={handleDecrease} disabled={count === 0}>
          - 1
        </button>
        <button className="primary" onClick={handleIncrease}>
          + 1
        </button>
        <button onClick={handleTwoDecrease} disabled={count <= 1}>
          - 2
        </button>
        <button className="primary" onClick={handleTwoIncrease}>
          + 2
        </button>
        <button onClick={handleReset}>초기화</button>
      </div>

      <p className="hint">버튼을 눌러 숫자를 바꿔보세요!</p>
    </div>
  )
}
