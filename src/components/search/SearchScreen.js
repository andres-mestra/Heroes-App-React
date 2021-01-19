import *  as React from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { HeroListCard } from '../heroes/HeroListCard';
import { useForm } from '../../hooks/useForm';
import { heroes } from '../../data/heroes';
import { getHeroesByName } from '../../selectors/getHeroesByName';



export const SearchScreen = ({ history }) => {

  const location = useLocation();
  //parsea el q de la url, si no esta es q se le asigna por defecto el valor ''
  const { q = ''} = queryString.parse(location.search);
  const [ values, handleInputChange, reset ] = useForm({
    search: q
  })
  const { search } = values;

  //solo se ejecuta si el q cambia
  const heroesFilter = React.useMemo( () => getHeroesByName(q), [q]);

  const handleSubmit =  ( e ) => {
    e.preventDefault()
    //query selector en la url
    history.push(`?q=${ search }`)
  }

  return (
    <article>
      <h1>Search Screen</h1>
      <hr/>
      <div className="row ">
        <section className="col-lg-5 col-sm-12">
          <h4>Search Form</h4>
          <hr/>
          <form className="form-group" onSubmit={ handleSubmit }>
            <input 
              type="text"
              name="search"
              placeholder="Find your hero"
              className="form-control"
              onChange={handleInputChange}
            />

            <button 
              type="submit"
              className="btn btn-outline-primary mt-2"
            >
              Search...
            </button>
          </form>

        </section>
        <section className="col-sm-12 col-lg-7 ">
          <h4> Results </h4>
          <hr/>
          {
            ( q === '') 
            &&
              <div className="alert alert-info">
                Search a hero
              </div>
          }
          {
            ( q !== '' && heroesFilter.length === 0 ) 
            &&
              <div className="alert alert-danger">
                There is not a hero with { q }
              </div>
          }

          {
            heroesFilter.map( hero => (
              <HeroListCard 
                key={ hero.id }
                { ...hero }
              />
            ))
          }
        </section>
      </div>
    </article>
  )
}
