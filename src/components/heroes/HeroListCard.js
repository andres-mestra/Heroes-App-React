import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const HeroListCard = ({ 
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters, 
}) => {
  return (
    <div className="card ms-3 mt-3" style={{maxWidth: 400 }}>
      <div className="row no-gutters">
        <div className="col-md-5">
          <img src={`./assets/heroes/${ id }.jpg`} className="card-img" alt={ superhero } />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">{ superhero }</h5>
            <p className="card-text">{ alter_ego }</p>
            {
              ( alter_ego !== characters ) 
              && <p className="card-text">{ characters }</p> 
            }
            <p className="card-text">
              <small className="text-muted">{ first_appearance }</small>
            </p>
            <Link to={`./hero/${id}`}> Mas... </Link>
          </div>
        </div>
      </div>
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