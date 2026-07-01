import { useState } from 'react'

export default function TextCounter() {
  const [text, setText] = useState('')

  return (
    <div className="demo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="글자를 입력하세요."
      />

      <p className="hint">현재 글자 수 : {text.length}자</p>
    </div>
  )
}
