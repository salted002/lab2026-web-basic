import { useState } from 'react'
export default function Counter() {
  const [count, setCount] = useState(0)
  const handleAdd = () => {
    // setCount(count + 1)
    // 함수형으로 바꾸기
    setCount((prev) => prev + 1)
  }

  const handleSubtract = () => {
    // if (count === 0) return
    // setCount(count - 1)
    // 함수형으로 바꾸기
    setCount((prev) => {
      if (prev === 0) return prev
      return prev - 1
    })
  }

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={handleAdd}>+ 1</button>
        <button onClick={handleSubtract}>- 1</button>
        <button
          onClick={() => {
            setCount(0)
          }}
        >
          reset
        </button>
      </div>
    </div>
  )
}
