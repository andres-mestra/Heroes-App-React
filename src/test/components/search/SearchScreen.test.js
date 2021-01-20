import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import { mount } from 'enzyme'
import { SearchScreen } from '../../../components/search/SearchScreen'


describe('Pruebas en <SearchScreen />', () => {
  
  test('debe de mostrar correctamente con valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/search'] }>
        <Route path="/search" component={ SearchScreen } />
      </MemoryRouter> 
    )
    
    expect( wrapper ).toMatchSnapshot()
    expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a hero')
  })

  test('Debe de mostrar a Batman y el input con el queryString. ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/search?q=batman'] }>
        <Route path="/search" component={ SearchScreen } />
      </MemoryRouter> 
    )
    
    expect( wrapper.find('HeroListCard').exists() ).toBe(true);
  })
  
  test('Debe de mostrar un error si no se encuetra el hero', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/search?q=0'] }>
        <Route path="/search" component={ SearchScreen } />
      </MemoryRouter> 
    )
    
    expect( wrapper.find('.alert-danger').text().trim() ).toBe('There is not a hero with 0')
  })
  
  test('debe de llamar el push del history', () => {
    
    const historyMock = {
      push: jest.fn()
    }
     
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/search?q=0'] }>
        <Route 
          path="/search" 
          component={ () => <SearchScreen history={historyMock} />} 
        />
      </MemoryRouter> 
    )
    
    wrapper.find('input').simulate('change', {
      target: {
        name:'search',
        value: 'batman'
      }
    })

    wrapper.find('form').prop('onSubmit')({ 
      preventDefault(){}
    })
    
    expect( historyMock.push ).toHaveBeenCalledWith('?q=batman')
  })
  
  
})
