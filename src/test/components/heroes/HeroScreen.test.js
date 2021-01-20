import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import { mount } from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen'


describe('Pruebas en <HeroScreen />', () => {
  
  const historyMock = {
    lengtn: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  }


  test('debe mostrar el componente redirect si no hay argumento en la url', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    );
    
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('Redirect').exists() ).toBe(true);
  })

  test('debe de mostrar un hero si el parametro existe.', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroeId" component={HeroScreen} />
      </MemoryRouter>
    );
    
    expect( wrapper.find('h1').text().trim() ).toBe('Spider Man');
  })

  test('debe de regresar a la pantalla anterior con push', () => {
    const historyMock = {
      lengtn: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route 
          path="/hero/:heroeId" 
          component={ (props) => <HeroScreen history={historyMock} />} 
        />
      </MemoryRouter>
    );
   
    wrapper.find('button').prop('onClick')();

    expect( historyMock.push ).toHaveBeenCalledWith('/')
    expect( historyMock.goBack ).not.toBeCalled()
  })

  test('debe de regresar a la pantalla anterior con el goBack', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route 
          path="/hero/:heroeId" 
          component={ (props) => <HeroScreen history={historyMock} />} 
        />
      </MemoryRouter>
    );
   
    wrapper.find('button').prop('onClick')();
    
    expect( historyMock.goBack ).toBeCalled()
    expect( historyMock.push ).toHaveBeenCalledTimes(0)
  })
  
  test('debe de llamar el redirect si el hero no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/spider123']}>
        <Route 
          path="/hero/:heroeId" 
          component={ (props) => <HeroScreen history={historyMock} />} 
        />
      </MemoryRouter>
    );
   
    //redirect: retorna un string vacio
    expect( wrapper.text() ).toBe( '' )

  })
  
})
