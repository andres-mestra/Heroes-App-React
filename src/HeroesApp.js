import * as React from 'react'
import { authContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged:false }
}

export const HeroesApp = () => {
  
  const [ user , dispatch ] = React.useReducer(authReducer, {}, init)

  React.useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user) )
    
  }, [user])

  return (
    <main>
      <authContext.Provider value={{ user, dispatch }} >
        <AppRouter />
      </authContext.Provider>
    </main>
  )
}
