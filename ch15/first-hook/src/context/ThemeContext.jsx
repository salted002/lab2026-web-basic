import { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useContext } from 'react'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useLocalStorage('ch15-dark-mode', false)

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  const value = { isDark, toggleTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === null) {
    throw new Error('useTheme은 <ThemeProvider> 안에서만 쓸 수 있습니다.')
  }

  return context
}
