import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import { authContext } from '../../auth/authContext'
import { DashboardRoutes } from '../../routers/DashboardRoutes'



describe('Pruebas en <DashboardRoutes />', () => {
  
  const contextInit = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Andres'
    }
  }

  test('debe mostrarse correctamente.', () => {
    const wrapper = mount(
      <authContext.Provider value={ contextInit } >
        <MemoryRouter >
          <DashboardRoutes />
        </MemoryRouter>
      </authContext.Provider> 
    )

    expect( wrapper ).toMatchSnapshot()
    expect( wrapper.find('.text-info').text().trim() ).toBe( 'Andres' )
  })
  
})
