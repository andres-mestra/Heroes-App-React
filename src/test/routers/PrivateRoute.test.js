import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import { PrivateRoute } from '../../routers/PrivateRoute'



describe('Pruebas en <PrivateRoute />', () => {

  const props = {
    location: {
      pathname: '/marvel',
    }
  }
  test('debe de mostrar el componente si esta autenticado y guardar localStorage.', () => {
    const wrapper = shallow(
      //MemoryRouter: es una versión de Router para hacer pruebas,revisar la documentación
      //de react-router-dom
      //Lo usamos puesto que PrivateRouter retorna un Route que debe estar dentro de un Router
      <MemoryRouter>
        <PrivateRoute 
          isAuthenticated={true}
          component={() => <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    )

    console.log( wrapper.html() )
  })
  
})
