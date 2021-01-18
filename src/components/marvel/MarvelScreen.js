import * as React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {

  return (
    <article>
      <h1>Marvel Comics</h1>
      <hr/>
      <HeroList publisher={'Marvel Comics'} />
    </article>
  )
}
