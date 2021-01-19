import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { authContext } from "../auth/authContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";




export const AppRouter = () => {

  const { user } = React.useContext(authContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute 
            exact
            path="/login" 
            component={ LoginScreen } 
            isAuthenticated={user.logged}
          />
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
