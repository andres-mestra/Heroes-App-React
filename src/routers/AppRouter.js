import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { authContext } from "../auth/authContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";



export const AppRouter = () => {

  const { user } = React.useContext(authContext);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={ LoginScreen } />
          <PrivateRoute 
            path="/" 
            component={ DashboardRoutes } 
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  )
}
