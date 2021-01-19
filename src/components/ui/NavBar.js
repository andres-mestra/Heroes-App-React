import * as React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { authContext } from '../../auth/authContext'
import { types } from '../../types/types';

export const NavBar = () => {

    const { user, dispatch } = React.useContext(authContext);
    const history = useHistory();

    const handleLogout = () => {
        history.replace('/login')
        dispatch({
            type: types.logout,
        })
    }
    

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link
                className="navbar-brand"
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <div className="navbar-nav ml-auto">
                    {
                        user?.logged &&
                        (<span className="nav-item nav-link text-info">
                            { user.name}
                        </span>)
                    }
                    <button
                        className="nav-item nav-link btn "
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}