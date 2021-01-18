import * as React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroListCard } from './HeroListCard';
import PropTypes from 'prop-types'


export const HeroList = ({ publisher }) => {
  
  const heroes = getHeroesByPublisher( publisher );

  return (
    <section className="card-columns" >
      {
        heroes.map( hero => (
          <HeroListCard 
            key={hero.id}
            {...hero}
          />
        ))
      }
    </section>
  )
}

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
}