import * as React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({
  isAuthenticated,
  component:Component,
  ...rest
}) => {
  
  //Guarda la pagina en la que esta el usuario mientras este autenticado
  // o a una pagina que quiera ingresar antes que autenticarse
  localStorage.setItem('lastPath', rest.location.pathname )

  return (
    <Route {...rest}
      //props: son lo props que provee el Route , history .....
      component={ (props) =>(
        (isAuthenticated) ? (<Component {...props} />) : (<Redirect to="/login" />)
      )}
    />
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}