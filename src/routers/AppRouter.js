import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { NavBar } from "../components/ui/NavBar";
import { LoginScreen } from "../components/login/LoginScreen";
import { Marvel } from "../components/marvel/Marvel";



export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/login" component={ LoginScreen } />
          <Route exact path="/" component={ Marvel } />
        </Switch>
      </div>
    </Router>
  )
}
