import React from 'react'
import AuthService from '../services/AuthService';
import {Route, Redirect} from 'react-router-dom';
export default function PrivateRoute({ children, ...rest }) {
    
    let isUserLoggedIn = AuthService.isUserLoggedIn();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isUserLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }