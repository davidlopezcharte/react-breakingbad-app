import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { firebase } from '../libs/firebase/firebase-config';
import { DashBoardRoute } from './DashBoardRoute';
import { AuthRouter } from './AuthRouter';
import { login, logout } from '../context/actions/auth';
import { AuthContext } from '../context/auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const { dispatch } = useContext(AuthContext);

  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));

        setIsLoggedIn(true);
      } else {
        dispatch(logout());
        setIsLoggedIn(false);
      }

      setCheking(false);
    });
  }, [dispatch, setIsLoggedIn, setCheking]);

  if (cheking) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isLoggedIn={isLoggedIn}
          />

          <PrivateRoute
            path="/"
            component={DashBoardRoute}
            isLoggedIn={isLoggedIn}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
