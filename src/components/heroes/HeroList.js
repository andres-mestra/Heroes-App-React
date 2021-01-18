import * as React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroListCard } from './HeroListCard';
import PropTypes from 'prop-types'


export const HeroList = ({ publisher }) => {
  //Solo se vuelve a ejecutar si el publisher cambia 
  const heroes = React.useMemo(() => getHeroesByPublisher( publisher ),
  [publisher])
  

  return (
    <section className="row justify-content-center animate__animated animate__fadeInRight" >
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