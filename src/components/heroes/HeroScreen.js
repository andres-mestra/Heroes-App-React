import * as React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
  
  //optiene los argumentos de la url
  const { heroeId } = useParams();

  const hero = getHeroById(heroeId);
  
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

  return (
    <div>
      <h1>{  }</h1>
    </div>
  )
}
