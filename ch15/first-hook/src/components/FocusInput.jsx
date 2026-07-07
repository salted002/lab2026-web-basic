import { useRef } from 'react'

export default function FocusInput() {
  const inputRef = useRef(null)
  const clickCount = useRef(0)

  const handleFocus = () => {
    inputRef.current.focus()
    clickCount.current = clickCount.current + 1
    console.log('포커스 버튼 누른 횟수:', clickCount.current)
  }

  return (
    <div className="demo">
      <input
        type="text"
        placeholder="버튼을 누르면 이곳에 커서가 들어옵니다."
        ref={inputRef}
      />

      <div className="button-row">
        <button onClick={handleFocus}>입력 칸에 커서 넣자.</button>
      </div>

      <p className="hint">
        버튼을 몇 번 눌렀는지 콘솔(개발자도구)에 찍힙니다. 화면 숫자는
        그대로입니다. ref는 값을 바꿔도 화면을 다시 그리지 않습니다.
      </p>
    </div>
  )
}
