import { useCounter } from '../hooks/useCounter'

export default function CounterDemo() {
  const { count, increase, decrease, reset } = useCounter(0)

  return (
    <div className="demo">
      <p className="counter-value">{count}</p>
      <div className="button-row">
        <button onClick={decrease}>- 1</button>
        <button className="primary" onClick={increase}>
          + 1
        </button>
        <button onClick={reset}>초기화</button>
      </div>

      <p className="hint">
        값을 다루는 코드는 useCounter 훅 안에 있습니다. 이 컴포넌트에는
        useState가 한 줄도 없습니다.
      </p>
    </div>
  )
}
