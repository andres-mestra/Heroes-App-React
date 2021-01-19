import * as React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

export const PublicRoute = ({
  isAuthenticated,
  component:Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={ (props) => ( 
        (!isAuthenticated) ? (<Component {...props} />) : (<Redirect to="/" />) 
      )}
    />
  )
}

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}
