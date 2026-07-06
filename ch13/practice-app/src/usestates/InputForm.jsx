import { useState } from 'react'

export default function InputForm() {
  const [text, setText] = useState('')

  const handleInput = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handleInput} value={text} />
      <span>{text}</span>
    </div>
  )
}
