import { useState } from 'react'

export default function TextCounter() {
  const [text, setText] = useState('')

  return (
    <div className="demo">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="입력하는 글자의 수를 실시간으로 계산합니다."
      />
      <p className="hint">현재 글자 수: {text.length}</p>
    </div>
  )
}
