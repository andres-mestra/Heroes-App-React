import React, { useContext } from 'react'
import { mount } from 'enzyme'
import { LoginScreen } from '../../../components/login/LoginScreen'
import { authContext } from '../../../auth/authContext'
import { types } from '../../../types/types'

describe('Pruebas en <LoginScreen />', () => {
  
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged:false
    }
  }
  
  const historyMock = {
    replace: jest.fn(),
  }

  const wrapper = mount(
    <authContext.Provider value={ contextValue }>
      <LoginScreen history={historyMock} />
    </authContext.Provider>
  )
  
  test('debe de mostrarse correctamente.', () => {
    expect( wrapper ).toMatchSnapshot()
  })
  
  test('debe de realizar el dispatch y la navegación.', () => {
    wrapper.find('button').prop('onClick')();

    expect( contextValue.dispatch ).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'Andres',
      },
    })

    expect(historyMock.replace ).toHaveBeenCalledWith('/')
  })
  
})
