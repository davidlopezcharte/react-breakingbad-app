import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { firebase } from '../libs/firebase/firebase-config';
import { login, logout } from '../context/actions/auth';
import { AuthContext } from '../context/auth/AuthContext';
import { DashBoardRoute } from './DashBoardRoute';
import { AuthRouter } from './AuthRouter';

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
      {!isLoggedIn ? (
        <AuthRouter />
      ) : (
        <Switch>
          <Route path="/" component={DashBoardRoute} />
        </Switch>
      )}
    </Router>
  );
};
