import * as React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
  
  //optiene los argumentos de la url
  const { heroeId } = useParams();
  //Solo se vuelve a ejecutar si el heroeId cambia 
  const hero = React.useMemo(() => getHeroById( heroeId ),
  [heroeId])

  
  //Redireccíona si el hero no existe
  if( !hero ){
    return <Redirect to="/" />
  }

  const { 
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters, 
  } = hero;

  const handleReturn = () => {
    //goBack: retorna a la pagina anterior
    (history.lengtn <= 2) ? history.push('/') : history.goBack();
  }

  return (
    <section className="row mt-5" >
      <div className="col-4">
        <img 
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h1>{ superhero }</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> {alter_ego} </li>
          <li className="list-group-item"><b>Publisher:</b> {publisher} </li>
          <li className="list-group-item"><b>First appearance:</b> {first_appearance} </li>
        </ul>
        <h5> Characters </h5>
        <p>{ characters }</p>

        <button 
          className="btn btn-outline-info" 
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </section>
  )
}
