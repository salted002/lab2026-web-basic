import { useTheme } from '../context/ThemeContext'

export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme()
  return (
    <button className="primary" onClick={toggleTheme}>
      {isDark ? '라이트 모드' : '다크 모드'}
    </button>
  )
}
