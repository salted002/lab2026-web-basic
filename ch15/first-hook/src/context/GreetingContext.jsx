import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const GreetingContext = createContext(null)

export const GreetingProvider = ({ children }) => {
  const [greeting, setGreeting] = useState('Hallo')

  const value = { greeting, setGreeting }

  return (
    <GreetingContext.Provider value={value}>
      {children}
    </GreetingContext.Provider>
  )
}

export const useGreeting = () => {
  const context = useContext(GreetingContext)

  if (context === null) {
    throw new Error(
      'useGreeting은 <GreetingProvider>안에서만 사용할 수 있습니다.',
    )
  }
  return context
}

export default GreetingContext
