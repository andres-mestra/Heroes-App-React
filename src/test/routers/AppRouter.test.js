import React from 'react'
import { mount } from 'enzyme'
import { AppRouter } from '../../routers/AppRouter'
import { authContext } from '../../auth/authContext'

describe('Pruebas en <AppRouter />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user:{
      logged:false,
    }
  }

  test('debe de mostrar el login si no está autenticado.', () => {
    
    const wrapper = mount(
      <authContext.Provider value={ contextValue }>
        <AppRouter />
      </authContext.Provider> 
    )

    expect( wrapper ).toMatchSnapshot();

  })


  test('debe de mostrar el component marvel si está autenticado.', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user:{
        logged:true,
        name: 'Andres'
      }
    }
    
    const wrapper = mount(
      <authContext.Provider value={ contextValue }>
        <AppRouter />
      </authContext.Provider> 
    )

    expect( wrapper.find('.navbar').exists() ).toBe(true)

  })
  
})
