import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import { PrivateRoute } from '../../routers/PrivateRoute'



describe('Pruebas en <PrivateRoute />', () => {

  const props = {
    location: {
      pathname: '/marvel',
    }
  }

  Storage.prototype.setItem = jest.fn()

  test('debe de mostrar el componente si esta autenticado y guardar localStorage.', () => {

    //mount: renderizar por completo el component, 
    //util para cuando se tienen componentes anidados
    const wrapper =  mount(
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
    expect( wrapper.find('span').exists() ).toBe(true)
    expect( localStorage.setItem ).toBeCalledWith('lastPath', '/marvel')
  })
  
})
