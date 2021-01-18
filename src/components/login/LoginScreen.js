import * as React from 'react'

export const LoginScreen = ({ history }) => {

  const handleLogin = () => {
    /*Redirecciona  a la pagina indicada, si se presiona en el navegador 
    regresar retorna a la pagina de origen ( LoginScrenn )*/ 
    //history.push('/')
    /*Redirecciona  a la pagina indicada, pero si se presiona en el navegador 
    regresar NO retornara a  esta pagina ( LoginScrenn )*/
    history.replace('/')
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
