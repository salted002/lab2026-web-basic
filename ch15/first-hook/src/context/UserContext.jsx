import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('수진')

  const value = { userName, setUserName }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (context === null) {
    throw new Error('useUser는 <UserProvider> 안에서만 사용할 수 있습니다.')
  }
  return context
}

export default UserContext
