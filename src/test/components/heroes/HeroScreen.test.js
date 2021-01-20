import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen'


describe('Pruebas en <HeroScreen />', () => {
  
  const historyMock = {
    lengtn: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  }

  const wrapper = mount(
    <MemoryRouter initialEntries={['/hero']}>
      <HeroScreen history={historyMock} />
    </MemoryRouter>
  );

  test('debe mostrar el componente redirect si no hay argumento en la url', () => {
    
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('Redirect').exists() ).toBe(true);
  })
  
  
})
