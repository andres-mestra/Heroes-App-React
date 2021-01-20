import React from 'react'
import { MemoryRouter, Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { authContext } from '../../../auth/authContext'
import { NavBar } from '../../../components/ui/NavBar'
import { types } from '../../../types/types'

describe('Pruebas en <NavBar />', () => {

  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  }
  
  const contextInit = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Andres'
    }
  }

  const wrapper = mount( 
    <authContext.Provider value={ contextInit } >
      <MemoryRouter >
        <Router history={historyMock} >
          <NavBar />
        </Router>
      </MemoryRouter>
    </authContext.Provider>
  ) 
  
  afterEach(() => {
    jest.clearAllMocks();
  })

  test('debe mostrarse correctamente.', () => {
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.text-info').text().trim() ).toBe('Andres')
  })

  test('debe de llamar el logout y el usar el history', () => {
    
    wrapper.find('button').prop('onClick')();
    
    expect( contextInit.dispatch ).toHaveBeenCalledWith({
      type: types.logout
    })

    expect( historyMock.replace ).toHaveBeenCalledWith('/login')

  })
  
  
})
