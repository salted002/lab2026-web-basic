import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const handleOneIncrease = () => {
    setCount(count + 1)
  }

  const handleOneDecrease = () => {
    if (count === 0) return
    setCount(count - 1)
  }

  const handleTwoIncrease = () => {
    setCount(count + 2)
  }

  const handleTwoDecrease = () => {
    if (count <= 1) return
    setCount(count - 2)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="demo">
      <p className="counter-value">{count}</p>

      <div className="button-row">
        <button onClick={handleOneIncrease}>+ 1</button>
        <button
          onClick={handleOneDecrease}
          disabled={count === 0 ? true : false}
        >
          - 1
        </button>
        <button onClick={handleTwoIncrease}>+ 2</button>
        <button
          onClick={handleTwoDecrease}
          disabled={count <= 1 ? true : false}
        >
          - 2
        </button>
        <button onClick={handleReset} className="primary">
          초기화
        </button>
      </div>

      <p className="hint">버튼을 눌러 숫자 값을 바꿔보세요.</p>
    </div>
  )
}
