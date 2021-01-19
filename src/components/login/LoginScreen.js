import * as React from 'react'
import { authContext } from '../../auth/authContext'
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

  const { dispatch } = React.useContext( authContext );

  const handleLogin = () => {
    /*Redirecciona  a la pagina indicada, si se presiona en el navegador 
    regresar retorna a la pagina de origen ( LoginScrenn )*/ 
    //history.push('/')
    
    //para redireccionar al usuario a la ultima ruta que accedio estando autenticado
    const lastPath = localStorage.getItem('lastPath') || '/'

    dispatch({
      type: types.login,
      payload: {
        name: 'Andres'
      }
    })

    /*Redirecciona  a la pagina indicada, pero si se presiona en el navegador 
    regresar NO retornara a  esta pagina ( LoginScrenn )*/
    history.replace(lastPath)

  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <button 
        className="btn btn-primary"
        onClick={ handleLogin }
      >
        login
      </button>
    </div>
  )
}
