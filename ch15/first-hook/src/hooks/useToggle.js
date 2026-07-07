// export default도 문법적으로는 문제없지만, 커스텀 훅에서는 named export(이름 있는 export)가 더 관용적, 또 한 파일에 여러 훅을 둘 수도 있음.
import { useState } from 'react'

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)

  const toggle = () => {
    setValue((prev) => !prev)
  }

  return [value, toggle]
}
