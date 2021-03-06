import React, { useReducer } from 'react';
import { AuthContext } from './context/auth/AuthContext';
import { authReducer } from './context/reducers/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => ({});

export const BreakingBadApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
