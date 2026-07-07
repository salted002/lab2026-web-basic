import { useEffect } from 'react'
import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key) // 저장된 값을 읽습니다.
    // saved의 타입은 무조건 문자열인데, 문자열을 자바스크립트 객체로 변환하려면 JSON.parse를 사용한다.
    return saved !== null ? JSON.parse(saved) : initialValue
  })

  useEffect(() => {
    // value는 자바스크립트 객체.
    // localStorage에는 자바스크립트 객체를 넣을 수가 없으므로, 문자열(json 포맷)로 변경하는 JSON.stringify를 사용하자.
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
