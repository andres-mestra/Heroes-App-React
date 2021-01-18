import * as React from 'react'
import PropTypes from 'prop-types'

export const HeroListCard = ({ 
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters, 
}) => {
  return (
    <div>
      { superhero }
    </div>
  )
}

HeroListCard.propTypes = {
  id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
  superhero: PropTypes.string,
  publisher: PropTypes.string,
  alter_ego: PropTypes.string,
  first_appearance: PropTypes.string,
  characters: PropTypes.string, 
}