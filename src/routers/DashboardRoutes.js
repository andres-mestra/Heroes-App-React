import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { NavBar } from '../components/ui/NavBar'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'


export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/marvel" component={ MarvelScreen } />
          <Route exact path="/marvel/:heroeId" component={ HeroScreen } />
          <Route exact path="/dc" component={ DcScreen } />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}
