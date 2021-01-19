import *  as React from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { HeroListCard } from '../heroes/HeroListCard';
import { useForm } from '../../hooks/useForm';
import { heroes } from '../../data/heroes';



export const SearchScreen = ({ history }) => {

  const location = useLocation();

  //parsea el q de la url, si no esta es q se le asigna por defecto el valor ''
  const { q = ''} = queryString.parse(location.search);

  const [ heroesFilter, setHeroesFilter ] = React.useState([]);
  const [ values, handleInputChange, reset ] = useForm({
    search: q
  })
  
  const { search } = values;

  const handleSubmit = ( e ) => {
    e.preventDefault()

    if( search < 3 ){
      return;
    }
    
    //query selector en la url
    history.push(`?q=${ search }`)
    /* setHeroesFilter( () => {
      return heroes.filter( hero => { 
        return hero?.publisher.toLowerCase().includes(search) 
      }) 
    })
    console.log(heroesFilter) */
  }

  return (
    <article>
      <h1>Search Screen</h1>
      <hr/>
      <div className="row">
        <section className="col-5">
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
        <section className="col-7">
          <h4> Results </h4>
          <hr/>
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
