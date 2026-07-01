import { useState } from 'react'

export default function PasswordField() {
  const [show, setShow] = useState(false)

  return (
    <div className="demo">
      <div className="button-row">
        <input
          type={show ? 'text' : 'password'}
          placeholder="비밀번호를 입력하세요."
        />

        <button onClick={() => setShow(!show)}>
          {show ? '숨기기' : '보기'}
        </button>
      </div>
    </div>
  )
}
